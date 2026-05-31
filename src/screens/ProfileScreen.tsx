import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Section } from "@/components/Section";
import { Bell, Lock, HelpCircle, LogOut, ChevronRight, GraduationCap, FlaskConical, Building2, MapPin, FileText } from "lucide-react";
import { useDocuments, docProgress } from "@/lib/documents-store";

const langs = [
  { id: "ru", label: "Русский" },
  { id: "kk", label: "Қазақша" },
  { id: "en", label: "English" },
];

export function ProfileScreen() {
  const [lang, setLang] = useState("ru");
  const docs = useDocuments();
  const { done, total, percent } = docProgress(docs);

  return (
    <div className="space-y-6">
      <ScreenHeader title="Профиль" />

      {/* User card */}
      <div className="px-5">
        <div
          className="rounded-3xl p-5 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-2xl font-extrabold backdrop-blur">
              АК
            </div>
            <div className="flex-1">
              <p className="text-[17px] font-bold leading-tight">Алмас Калиев</p>
              <p className="text-xs text-white/70">almas.k@grantstep.kz</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">Статус</p>
              <p className="mt-0.5 text-sm font-bold">На рассмотрении</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">Специальность</p>
              <p className="mt-0.5 text-sm font-bold leading-tight">Прог. инженерия</p>
            </div>
          </div>
        </div>
      </div>

      {/* Documents progress */}
      <div className="px-5">
        <Link
          to="/documents"
          className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}>
            <FileText className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold text-foreground">Документы</p>
              <p className="text-[12px] font-bold text-primary">{percent}%</p>
            </div>
            <p className="text-[11px] text-muted-foreground">{done} из {total} загружено</p>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full transition-all" style={{ width: `${percent}%`, background: "var(--gradient-primary)" }} />
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>

      <Section title="Язык интерфейса">
        <div
          className="flex rounded-2xl bg-secondary p-1"
          role="tablist"
        >
          {langs.map((l) => {
            const active = lang === l.id;
            return (
              <button
                key={l.id}
                onClick={() => setLang(l.id)}
                className="flex-1 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all"
                style={{
                  background: active ? "white" : "transparent",
                  color: active ? "var(--color-primary)" : "var(--color-muted-foreground)",
                  boxShadow: active ? "var(--shadow-soft)" : "none",
                }}
              >
                {l.label}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Дополнительно">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {[
            { icon: FlaskConical, label: "Лаборатории ВКТУ", to: "/labs" },
            { icon: GraduationCap, label: "Для родителей", to: "/parents" },
            { icon: Building2, label: "Общежитие", to: "/dorm" },
            { icon: MapPin, label: "Почему Усть-Каменогорск", to: "/city" },
          ].map((item, i, arr) => (
            <Link
              key={item.label}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3.5 ${i !== arr.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}>
                <item.icon className="h-4 w-4" />
              </span>
              <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Настройки">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {[
            { icon: Bell, label: "Уведомления" },
            { icon: Lock, label: "Безопасность" },
            { icon: HelpCircle, label: "Помощь и поддержка" },
            { icon: LogOut, label: "Выйти", danger: true },
          ].map((item, i, arr) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 px-4 py-3.5 text-left ${i !== arr.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground">
                <item.icon className="h-4 w-4" />
              </span>
              <span className={`flex-1 text-sm font-medium ${item.danger ? "text-destructive" : "text-foreground"}`}>
                {item.label}
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </Section>

      <p className="px-5 pb-4 text-center text-[11px] text-muted-foreground">
        GrantStep × ВКТУ · v 1.0.0
      </p>
    </div>
  );
}