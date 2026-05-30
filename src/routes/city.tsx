import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { InfoScreen } from "@/screens/InfoScreen";

export const Route = createFileRoute("/city")({
  head: () => ({ meta: [{ title: "Почему Усть-Каменогорск" }] }),
  component: () => (
    <AppShell>
      <InfoScreen kind="city" />
    </AppShell>
  ),
});