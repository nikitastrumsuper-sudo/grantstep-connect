import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProfileScreen } from "@/screens/ProfileScreen";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Профиль" }] }),
  component: () => (
    <AppShell>
      <ProfileScreen />
    </AppShell>
  ),
});