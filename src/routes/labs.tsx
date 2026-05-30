import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { InfoScreen } from "@/screens/InfoScreen";

export const Route = createFileRoute("/labs")({
  head: () => ({ meta: [{ title: "Лаборатории ВКТУ" }] }),
  component: () => (
    <AppShell>
      <InfoScreen kind="labs" />
    </AppShell>
  ),
});