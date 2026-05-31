import { Link } from "@tanstack/react-router";
import {
  Building2,
  GraduationCap,
  Award,
  FileText,
  BedDouble,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  ScrollText,
  Globe2,
  Check,
  Globe,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import campus from "@/assets/campus.jpg";
import trophy from "@/assets/trophy.png";

const sections = [
  { label: "О вузе", icon: Building2, to: "/about" },
  { label: "Специальности", icon: GraduationCap, to: "/specialties" },
  { label: "Гранты", icon: Award, to: "/admission" },
  { label: "Документы", icon: FileText, to: "/documents" },
  { label: "Общежитие", icon: BedDouble, to: "/dorm" },
  { label: "FAQ", icon: HelpCircle, to: "/faq" },
] as const;

const advantages = [
  "50 баллов ЕНТ — минимальный порог",
  "Бесплатное обучение при гранте",
  "Современные лаборатории",
  "Международные программы",
  "Трудоустройство выпускников 96%",
];

const parents = [
  {
    icon: BedDouble,
    title: "Бесплатное общежитие для грантников",
    sub: "Комфортные условия проживания",
  },
  {
    icon: Briefcase,
    title: "Высокий уровень трудоустройства выпускников",
    sub: "96% трудоустройство по специальности",
  },
  {
    icon: ScrollText,
    title: "Государственный диплом",
    sub: "Качественное образование и признание",
  },
  {
    icon: ShieldCheck,
    title: "Безопасный кампус",
    sub: "Круглосуточная охрана и видеонаблюдение",
  },
  {
    icon: Globe2,
    title: "Международные программы",
    sub: "Обмены, стажировки и двойные дипломы",
  },
];

export function HomeScreen() {
  return (
    <div className="space-y-4 pb-4">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-[max(env(safe-area-inset-top),0.75rem)]">
        <div className="flex items-center gap-1.5">
          <span
            className="text-[22px] font-extrabold tracking-tight text-foreground"
            style={{ fontFamily: "Manrope, Inter, sans-serif" }}
          >
            GrantStep
          </span>
          <span
            className="flex h-6 w-6 items-center justify-center rounded-md text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
          </span>
        </div>
        <button
          aria-label="Язык"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white"
          style={{ color: "var(--color-primary)" }}
        >
          <Globe className="h-4 w-4" />
        </button>
      </div>

      {/* Hero banner */}
      <div className="px-4">
        <div
          className="relative overflow-hidden rounded-3xl p-5 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <img
            src={campus}
            alt="Кампус ВКТУ"
            width={1280}
            height={896}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(150deg, oklch(0.28 0.16 265 / 0.92) 0%, oklch(0.32 0.18 260 / 0.78) 55%, oklch(0.22 0.13 265 / 0.7) 100%)",
            }}
          />
          <div className="relative">
            <h1
              className="text-[24px] font-extrabold leading-[1.1]"
              style={{ fontFamily: "Manrope, Inter, sans-serif" }}
            >
              Поступление в ВКТУ
              <br /> стало проще
            </h1>
            <p className="mt-3 text-[13px] leading-snug text-white/85">
              Гранты • Общежитие • Документы
              <br /> Всё в одном месте.
            </p>
            <Link
              to="/documents"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-primary"
              style={{ boxShadow: "0 10px 24px -10px rgb(0 0 0 / 0.45)" }}
            >
              Подать заявку онлайн
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Partner University Card */}
      <div className="px-4">
        <Link
          to="/about"
          className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
            style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
          >
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Главный партнёр
            </p>
            <p className="text-[14px] font-bold leading-tight text-foreground">
              ВКТУ имени Д. Серикбаева
            </p>
            <p className="text-[11px] leading-tight text-muted-foreground">
              Восточно-Казахстанский технический университет
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
      </div>

      {/* Advantages — dark premium card with trophy */}
      <div className="px-4">
        <div
          className="relative overflow-hidden rounded-2xl p-4 text-white"
          style={{
            background:
              "linear-gradient(155deg, oklch(0.18 0.06 265) 0%, oklch(0.22 0.1 265) 100%)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h3
            className="text-[16px] font-extrabold"
            style={{ fontFamily: "Manrope, Inter, sans-serif" }}
          >
            Преимущества ВКТУ
          </h3>
          <ul className="mt-3 space-y-2 pr-24">
            {advantages.map((a) => (
              <li
                key={a}
                className="flex items-start gap-2 text-[12.5px] leading-snug text-white/90"
              >
                <Check
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  style={{ color: "oklch(0.85 0.18 95)" }}
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <img
            src={trophy}
            alt=""
            aria-hidden
            width={512}
            height={512}
            loading="lazy"
            className="pointer-events-none absolute -bottom-2 -right-2 h-32 w-32 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Main sections grid 2x3 */}
      <div className="px-4">
        <h2
          className="mb-2.5 text-[15px] font-bold text-foreground"
          style={{ fontFamily: "Manrope, Inter, sans-serif" }}
        >
          Основные разделы
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {sections.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card px-2 py-3 text-center"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[10.5px] font-semibold leading-tight text-foreground">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Parents — deep blue */}
      <div className="px-4">
        <div
          className="overflow-hidden rounded-2xl p-4"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.28 0.16 265) 0%, oklch(0.22 0.13 265) 100%)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h3
            className="text-[16px] font-extrabold text-white"
            style={{ fontFamily: "Manrope, Inter, sans-serif" }}
          >
            Для родителей
          </h3>
          <p className="text-[11.5px] text-white/70">Почему родители выбирают ВКТУ</p>

          <div className="mt-3 space-y-2">
            {parents.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-xl bg-white/10 p-2.5 backdrop-blur"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ background: "oklch(0.55 0.18 255 / 0.55)" }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-[12.5px] font-semibold text-white">{title}</p>
                  <p className="truncate text-[10.5px] text-white/65">{sub}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-white/70" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Online Application CTA */}
      <div className="px-4">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card p-4"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h3
            className="text-[16px] font-extrabold text-foreground"
            style={{ fontFamily: "Manrope, Inter, sans-serif" }}
          >
            Подайте документы онлайн
          </h3>
          <p className="mt-1 text-[12.5px] text-muted-foreground">
            Это быстро, удобно и безопасно
          </p>
          <Link
            to="/documents"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
          >
            Начать сейчас
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}