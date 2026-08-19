/**
 * Routes that are always dark, regardless of the time-of-day auto-switch or a
 * manual toggle.
 *
 * The inquiry form is an OpnForm embed that renders dark-only, and a cross-origin
 * iframe can't follow our theme. During daylight hours the light page left a dark
 * form panel floating in a white page, so the page is pinned to match the form.
 */
export const FORCED_DARK_ROUTES = ["/inquire"];

export function isForcedDark(pathname: string | null): boolean {
  if (!pathname) return false;
  return FORCED_DARK_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}
