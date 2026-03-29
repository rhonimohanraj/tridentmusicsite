import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
        404
      </p>
      <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] tracking-tight">
        Page not <em className="italic">found</em>
      </h1>
      <p className="mt-4 text-muted-foreground max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. Maybe the party moved somewhere else.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
