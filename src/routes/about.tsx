import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { InfoScreen } from "@/screens/InfoScreen";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "О ВКТУ" }] }),
  component: () => (
    <AppShell>
      <InfoScreen kind="about" />
    </AppShell>
  ),
});