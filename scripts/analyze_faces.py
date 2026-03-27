#!/usr/bin/env python3
"""
Analyze team photos: detect faces, compute eye level, and output
optimal object-position CSS values to frame shoulders + faces.

Usage:
    python3 scripts/analyze_faces.py

Outputs a JSON mapping of member name → { objectPosition, scale }
that can be pasted into the team data or component.
"""

import cv2
import numpy as np
import urllib.request
import json
import os
import sys

# Team member images from data.ts
TEAM = [
    ("Destiny Maluga", "https://framerusercontent.com/images/WERes4aGWZVC6bmNU9QbTvBM.jpg?width=1067&height=1600"),
    ("Joey Simms", "https://framerusercontent.com/images/vQuVTK9ADWkDhikVBY0lMY8sIo.jpg?width=1067&height=1600"),
    ("Danylo Denysevych", "https://framerusercontent.com/images/u2zxAhCF5X9wH4Udtctn7VAd30.jpg?width=6000&height=4000"),
    ("Carson Schepp", "https://framerusercontent.com/images/rzZTjCUIg1oueLw5i7VNDlsxlo.jpg?width=1067&height=1600"),
    ("Aidan Froese", "https://framerusercontent.com/images/bCkxOJxCeRews9YhSyymmnUtPQ.jpg?width=1067&height=1600"),
    ("Jared Weir", "https://framerusercontent.com/images/pwVwklZywXKq0qhySUvzyZ9jpE.jpg?width=1067&height=1600"),
    ("Eldon Santillan", "https://framerusercontent.com/images/V27LNCPltP7VDWhXnGrsRG09PPk.jpg?width=1067&height=1600"),
    ("Alexander Vaughn", "https://framerusercontent.com/images/QaoZGfAWAQODyQ1kenM4iuRbw.jpg?width=1067&height=1600"),
    ("Austin Liske", "https://framerusercontent.com/images/GgRsX73P5vdG6iy6d0EtXn3Ek.jpg?width=1067&height=1600"),
    ("Emma Sul", "https://framerusercontent.com/images/pPmRI6oGGWREXJLVbpQrT4aaWJ4.jpg?width=1067&height=1600"),
    ("Hailey Rapsky", "https://framerusercontent.com/images/ixQfGL8YiV277zEXuEMexDFCgSU.jpg?width=1067&height=1600"),
    ("Annie Wurtz", "https://framerusercontent.com/images/7trBcaIGjaAFxflZumULWZysBbg.jpg?width=1067&height=1600"),
    ("Brenna Kelland", "https://framerusercontent.com/images/i89ZcpC5klSPVufBkdB1FIu2R4.jpg?width=1600&height=1067"),
    ("Bryce Cotton", "https://framerusercontent.com/images/MfrCzX5QbLcxHZ3U48nMpGHpj6o.jpg?width=1067&height=1600"),
    ("Sarah-Jane Speers", "https://framerusercontent.com/images/S09a0KJU1WmwwklxP4sS1aVZnLQ.jpg?width=1067&height=1600"),
    ("Rhoni Mohanraj", "https://framerusercontent.com/images/Ys0oT02Hh6WsW36hAq5vgexpHY.jpg?width=1067&height=1600"),
]

# We want to show face + shoulders. The ideal crop puts the eye line
# at roughly 35% from the top of the visible area, leaving room for
# hair above and shoulders below.
TARGET_EYE_PERCENT = 0.35

# How much to zoom in (CSS scale). We want shoulders + face visible.
# A scale of 1.15-1.3 works well for portrait headshots.
DEFAULT_SCALE = 1.20


def download_image(url: str) -> np.ndarray | None:
    """Download image from URL and return as OpenCV BGR array."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = np.frombuffer(resp.read(), np.uint8)
            img = cv2.imdecode(data, cv2.IMREAD_COLOR)
            return img
    except Exception as e:
        print(f"  ⚠ Download failed: {e}", file=sys.stderr)
        return None


def detect_face_and_eyes(img: np.ndarray) -> dict | None:
    """
    Detect the largest face and eye positions.
    Returns dict with face_box, eye_center_y (as fraction of image height),
    and face_center_x (as fraction of image width).
    """
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    h, w = gray.shape[:2]

    # Try multiple cascade classifiers for robustness
    face_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )
    eye_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_eye.xml"
    )

    # Detect faces
    faces = face_cascade.detectMultiScale(
        gray, scaleFactor=1.1, minNeighbors=5, minSize=(50, 50)
    )

    if len(faces) == 0:
        # Try with more lenient params
        faces = face_cascade.detectMultiScale(
            gray, scaleFactor=1.05, minNeighbors=3, minSize=(30, 30)
        )

    if len(faces) == 0:
        return None

    # Pick the largest face
    areas = [fw * fh for (_, _, fw, fh) in faces]
    idx = np.argmax(areas)
    fx, fy, fw, fh = faces[idx]

    # Detect eyes within the face region
    face_roi = gray[fy : fy + fh, fx : fx + fw]
    eyes = eye_cascade.detectMultiScale(
        face_roi, scaleFactor=1.1, minNeighbors=3, minSize=(15, 15)
    )

    if len(eyes) >= 2:
        # Average eye Y position (relative to face top)
        eye_ys = [ey + eh // 2 for (_, ey, _, eh) in eyes[:2]]
        eye_y_in_face = np.mean(eye_ys)
        eye_y_abs = fy + eye_y_in_face
    else:
        # Estimate eye line at ~35% down from top of face box
        eye_y_abs = fy + fh * 0.35

    face_center_x = (fx + fw / 2) / w
    eye_center_y = eye_y_abs / h

    # Estimate shoulder line — roughly 1.8x face height below eye line
    shoulder_y = min(eye_y_abs + fh * 1.8, h)
    shoulder_y_pct = shoulder_y / h

    return {
        "face_box": (int(fx), int(fy), int(fw), int(fh)),
        "eye_center_y": float(eye_center_y),
        "face_center_x": float(face_center_x),
        "shoulder_y_pct": float(shoulder_y_pct),
        "image_size": (w, h),
    }


def compute_css_position(detection: dict) -> dict:
    """
    Given face detection results, compute the optimal CSS
    object-position and scale to frame shoulders + face.
    """
    eye_y = detection["eye_center_y"]
    face_x = detection["face_center_x"]

    # We want the eye line to appear at TARGET_EYE_PERCENT of the visible area.
    # With object-fit: cover and a scale, the object-position Y determines
    # where the image anchors. A lower Y% shifts the image up (showing more
    # of the lower body), higher Y% shifts down (showing more of the top).
    #
    # The math: if eyes are at 30% of image height and we want them at 35%
    # of the visible area, we need to shift slightly down.

    # Convert eye position to object-position percentage
    # object-position Y: 0% = top of image visible, 100% = bottom visible
    # We want: visible_area_top + TARGET_EYE_PERCENT * visible_height = eye_y * img_height
    # With scale S, visible_height = img_height / S
    # So: object_position_y ≈ eye_y - TARGET_EYE_PERCENT / S (normalized)
    scale = DEFAULT_SCALE

    # Simpler approach: map eye position to object-position
    # If eyes are at 30% of image, we want to shift to show that at 35% of viewport
    # object-position Y of 25-30% typically works for portrait headshots
    obj_y = max(0, min(100, eye_y * 100 - 5))  # slight upward bias for shoulders

    # Horizontal centering — keep face centered
    obj_x = max(20, min(80, face_x * 100))

    return {
        "objectPosition": f"{round(obj_x)}% {round(obj_y)}%",
        "scale": scale,
    }


def main():
    print("🔍 Analyzing team photos for face/eye positioning...\n")

    results = {}
    cache_dir = os.path.join(os.path.dirname(__file__), ".face_cache")
    os.makedirs(cache_dir, exist_ok=True)

    for name, url in TEAM:
        print(f"  Processing: {name}...")

        # Download image
        img = download_image(url)
        if img is None:
            print(f"    ✗ Could not download image")
            results[name] = {
                "objectPosition": "50% 25%",
                "scale": DEFAULT_SCALE,
                "detected": False,
            }
            continue

        # Detect face and eyes
        detection = detect_face_and_eyes(img)
        if detection is None:
            print(f"    ✗ No face detected — using default position")
            results[name] = {
                "objectPosition": "50% 25%",
                "scale": DEFAULT_SCALE,
                "detected": False,
            }
            continue

        # Compute CSS values
        css = compute_css_position(detection)

        eye_pct = round(detection["eye_center_y"] * 100, 1)
        shoulder_pct = round(detection["shoulder_y_pct"] * 100, 1)
        print(f"    ✓ Eyes at {eye_pct}% | Shoulders at {shoulder_pct}% | CSS: {css['objectPosition']}")

        results[name] = {
            **css,
            "detected": True,
            "eyeLevel": eye_pct,
            "shoulderLevel": shoulder_pct,
        }

    # Output results
    print("\n" + "=" * 60)
    print("RESULTS — paste into team data or component styles:")
    print("=" * 60 + "\n")

    # Print as TypeScript-friendly format
    print("// Face-analyzed object positions for team photos")
    print("export const teamPhotoPositions: Record<string, { objectPosition: string; scale: number }> = {")
    for name, data in results.items():
        pos = data["objectPosition"]
        scale = data["scale"]
        detected = "✓" if data.get("detected") else "✗"
        print(f'  "{name}": {{ objectPosition: "{pos}", scale: {scale} }}, // {detected}')
    print("};")

    # Also save as JSON
    output_path = os.path.join(os.path.dirname(__file__), "face_positions.json")
    with open(output_path, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\n💾 Full results saved to: {output_path}")


if __name__ == "__main__":
    main()
