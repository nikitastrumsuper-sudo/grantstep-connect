export function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="px-5 pb-4 pt-[max(env(safe-area-inset-top),1rem)]">
      <h1
        className="text-[28px] font-extrabold leading-tight tracking-tight text-foreground"
        style={{ fontFamily: "Manrope, Inter, sans-serif" }}
      >
        {title}
      </h1>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </header>
  );
}