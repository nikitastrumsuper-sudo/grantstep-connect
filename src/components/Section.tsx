import type { ReactNode } from "react";

export function Section({
  title,
  action,
  children,
  className = "",
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 ${className}`}>
      {title && (
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-[17px] font-bold tracking-tight text-foreground" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
            {title}
          </h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}