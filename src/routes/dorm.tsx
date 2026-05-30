import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { InfoScreen } from "@/screens/InfoScreen";

export const Route = createFileRoute("/dorm")({
  head: () => ({ meta: [{ title: "Общежитие" }] }),
  component: () => (
    <AppShell>
      <InfoScreen kind="dorm" />
    </AppShell>
  ),
});