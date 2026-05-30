import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { HomeScreen } from "@/screens/HomeScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Главная — GrantStep × ВКТУ" },
      { name: "description", content: "Поступление в ВКТУ имени Д. Серикбаева стало проще." },
    ],
  }),
  component: () => (
    <AppShell>
      <HomeScreen />
    </AppShell>
  ),
});
