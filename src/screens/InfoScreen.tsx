import { ScreenHeader } from "@/components/ScreenHeader";
import { Section } from "@/components/Section";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import campus from "@/assets/campus.jpg";
import dorm from "@/assets/dorm.jpg";
import labsImg from "@/assets/spec-ai.jpg";

type Kind = "about" | "dorm" | "faq" | "labs" | "parents" | "city";

const content: Record<Kind, {
  title: string;
  subtitle: string;
  hero?: string;
  lead?: string;
  bullets?: string[];
  faq?: { q: string; a: string }[];
}> = {
  about: {
    title: "О ВКТУ",
    subtitle: "Восточно-Казахстанский технический университет им. Д. Серикбаева",
    hero: campus,
    lead: "ВКТУ — ведущий технический вуз Восточного Казахстана с более чем 65-летней историей. Готовим инженеров, IT-специалистов и металлургов для индустрии будущего.",
    bullets: [
      "Основан в 1958 году",
      "Более 12 000 студентов",
      "8 факультетов и 40+ кафедр",
      "Партнёрства с ведущими предприятиями региона",
      "Аккредитация ASIIN и AQAS",
    ],
  },
  dorm: {
    title: "Общежитие",
    subtitle: "Комфортное жильё для иногородних студентов",
    hero: dorm,
    lead: "Современные общежития в шаговой доступности от учебных корпусов. Бесплатно для обладателей государственных грантов.",
    bullets: [
      "Бесплатно для грантников",
      "Wi-Fi, кухни и прачечные на этаже",
      "Зоны для учёбы и отдыха",
      "Круглосуточная охрана и пропуск",
      "Спортивный зал в шаговой доступности",
    ],
  },
  labs: {
    title: "Лаборатории ВКТУ",
    subtitle: "Современная исследовательская база",
    hero: labsImg,
    lead: "В университете работают современные лаборатории для практической подготовки студентов по техническим и IT направлениям.",
    bullets: [
      "Лаборатория искусственного интеллекта",
      "Центр промышленной автоматизации",
      "Лаборатория металлургических процессов",
      "Энергетический полигон",
      "Робототехнический хаб",
    ],
  },
  parents: {
    title: "Для родителей",
    subtitle: "Всё, что важно знать о выборе ВКТУ",
    hero: campus,
    lead: "ВКТУ — это надёжный путь к качественному образованию и будущей карьере вашего ребёнка.",
    bullets: [
      "Бесплатное общежитие",
      "Высокое трудоустройство (96%)",
      "Государственный диплом",
      "Безопасный кампус",
      "Международные программы обмена",
    ],
  },
  city: {
    title: "Почему Усть-Каменогорск",
    subtitle: "Город возможностей для студентов",
    hero: campus,
    lead: "Усть-Каменогорск — промышленный и культурный центр Восточного Казахстана, где образование сочетается с реальной практикой на предприятиях.",
    bullets: [
      "Доступная стоимость жизни",
      "Развитая инфраструктура",
      "Близость к природе и Алтаю",
      "Крупные предприятия для практики",
      "Безопасный и студенческий город",
    ],
  },
  faq: {
    title: "FAQ",
    subtitle: "Ответы на популярные вопросы",
    faq: [
      { q: "Какой минимальный балл ЕНТ для поступления?", a: "Минимальный порог — 50 баллов ЕНТ для участия в грантовом конкурсе." },
      { q: "Как подать документы онлайн?", a: "Загрузите все документы в разделе «Документы» и нажмите «Отправить заявку»." },
      { q: "Бесплатно ли общежитие?", a: "Да, общежитие бесплатно для обладателей государственных образовательных грантов." },
      { q: "Когда объявляют результаты грантов?", a: "Результаты конкурса грантов объявляются 13 августа." },
      { q: "Есть ли международные программы?", a: "Да, действует более 25 программ обмена с университетами Европы и Азии." },
    ],
  },
};

export function InfoScreen({ kind }: { kind: Kind }) {
  const data = content[kind];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      <ScreenHeader title={data.title} subtitle={data.subtitle} />

      {data.hero && (
        <div className="px-5">
          <img
            src={data.hero}
            alt={data.title}
            loading="lazy"
            className="h-48 w-full rounded-3xl object-cover"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </div>
      )}

      {data.lead && (
        <p className="px-5 text-[15px] leading-relaxed text-foreground">{data.lead}</p>
      )}

      {data.bullets && (
        <Section title="Ключевые факты">
          <div className="space-y-2">
            {data.bullets.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "var(--color-primary)" }} />
                <span className="text-sm font-medium text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {data.faq && (
        <Section title="Вопросы и ответы">
          <div
            className="overflow-hidden rounded-3xl border border-border bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {data.faq.map((item, i, arr) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className={i !== arr.length - 1 ? "border-b border-border" : ""}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left"
                  >
                    <span className="flex-1 text-sm font-semibold text-foreground">{item.q}</span>
                    <ChevronDown
                      className="h-4 w-4 text-muted-foreground transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-4 pb-4 text-[13px] leading-relaxed text-muted-foreground">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Section>
      )}
    </div>
  );
}