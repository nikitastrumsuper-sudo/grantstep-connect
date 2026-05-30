import { Link, useRouterState } from "@tanstack/react-router";
import { Home, GraduationCap, Route as RouteIcon, FileText, User } from "lucide-react";
import type { ReactNode } from "react";

const tabs = [
  { to: "/", label: "Главная", icon: Home },
  { to: "/specialties", label: "Специальности", icon: GraduationCap },
  { to: "/admission", label: "Поступление", icon: RouteIcon },
  { to: "/documents", label: "Документы", icon: FileText },
  { to: "/profile", label: "Профиль", icon: User },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-background">
      <main className="flex-1 pb-24">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[480px] border-t border-border bg-white/95 backdrop-blur-xl">
        <ul className="flex items-stretch justify-between px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2">
          {tabs.map(({ to, label, icon: Icon }) => {
            const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <li key={to} className="flex-1">
                <Link
                  to={to}
                  className="flex flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-medium transition-colors"
                  style={{ color: active ? "var(--color-primary)" : "var(--color-muted-foreground)" }}
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                    style={{
                      background: active ? "var(--gradient-primary)" : "transparent",
                      color: active ? "var(--color-primary-foreground)" : "var(--color-muted-foreground)",
                      boxShadow: active ? "var(--shadow-soft)" : "none",
                    }}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="leading-none">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}