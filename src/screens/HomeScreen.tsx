import { Link } from "@tanstack/react-router";
import {
  Building2,
  GraduationCap,
  Award,
  FileText,
  BedDouble,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Bell,
  ShieldCheck,
  Briefcase,
  ScrollText,
  Globe2,
} from "lucide-react";
import campus from "@/assets/campus.jpg";
import { Section } from "@/components/Section";

const sections = [
  { label: "О ВКТУ", icon: Building2, to: "/about" },
  { label: "Специальности", icon: GraduationCap, to: "/specialties" },
  { label: "Гранты", icon: Award, to: "/admission" },
  { label: "Документы", icon: FileText, to: "/documents" },
  { label: "Общежитие", icon: BedDouble, to: "/dorm" },
  { label: "FAQ", icon: HelpCircle, to: "/faq" },
] as const;

const advantages = [
  { v: "50", label: "минимум баллов ЕНТ" },
  { v: "100%", label: "обучение по гранту бесплатно" },
  { v: "96%", label: "трудоустройство выпускников" },
  { v: "40+", label: "современных лабораторий" },
  { v: "25+", label: "международных программ" },
];

const parents = [
  { icon: BedDouble, label: "Бесплатное общежитие" },
  { icon: Briefcase, label: "Высокое трудоустройство" },
  { icon: ScrollText, label: "Государственный диплом" },
  { icon: ShieldCheck, label: "Безопасный кампус" },
  { icon: Globe2, label: "Международные программы" },
];

export function HomeScreen() {
  return (
    <div className="space-y-7">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-[max(env(safe-area-inset-top),1rem)]">
        <div>
          <p className="text-xs font-medium text-muted-foreground">GrantStep × ВКТУ</p>
          <p className="text-[15px] font-semibold text-foreground">Здравствуйте, абитуриент 👋</p>
        </div>
        <button
          aria-label="Уведомления"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground"
        >
          <Bell className="h-5 w-5" />
        </button>
      </div>

      {/* Hero */}
      <div className="px-5">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ boxShadow: "var(--shadow-deep)" }}
        >
          <img
            src={campus}
            alt="Кампус ВКТУ"
            width={1280}
            height={896}
            className="h-[300px] w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.18 0.1 265 / 0.1) 0%, oklch(0.18 0.1 265 / 0.85) 75%, oklch(0.16 0.1 265 / 0.95) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium backdrop-blur">
              Главный партнёр · ВКТУ им. Д. Серикбаева
            </span>
            <h2
              className="mt-3 text-[26px] font-extrabold leading-[1.1]"
              style={{ fontFamily: "Manrope, Inter, sans-serif" }}
            >
              Поступление в ВКТУ стало проще
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Всё необходимое для поступления в одном приложении
            </p>
            <Link
              to="/documents"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-primary"
              style={{ boxShadow: "0 8px 24px -8px rgb(0 0 0 / 0.35)" }}
            >
              Подать документы
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main sections grid */}
      <Section title="Основные разделы">
        <div className="grid grid-cols-3 gap-3">
          {sections.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-3 text-center"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-primary)", color: "var(--color-primary-foreground)" }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-semibold leading-tight text-foreground">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Advantages */}
      <Section title="Преимущества ВКТУ">
        <div
          className="relative overflow-hidden rounded-3xl p-6 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <div
            className="absolute -right-12 -top-12 h-44 w-44 rounded-full"
            style={{ background: "oklch(0.7 0.18 250 / 0.3)", filter: "blur(20px)" }}
          />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
            Почему ВКТУ
          </p>
          <h3
            className="mt-1 text-[22px] font-extrabold leading-tight"
            style={{ fontFamily: "Manrope, Inter, sans-serif" }}
          >
            Технический университет №1 в Восточном Казахстане
          </h3>
          <ul className="relative mt-5 space-y-3">
            {advantages.map((a) => (
              <li key={a.label} className="flex items-center gap-3">
                <span className="flex h-10 min-w-[56px] items-center justify-center rounded-xl bg-white/15 px-2 text-sm font-extrabold backdrop-blur">
                  {a.v}
                </span>
                <span className="text-sm text-white/90">{a.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* For parents */}
      <Section title="Для родителей">
        <div className="space-y-2">
          {parents.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 text-sm font-medium text-foreground">{label}</span>
              <CheckCircle2 className="h-5 w-5" style={{ color: "var(--color-success)" }} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}