import { LoginForm } from "@/features/auth/components";
import { ensureUnauthenticated } from "@/lib/auth-guard";

export default async function LoginPage() {
  await ensureUnauthenticated();
  return (
    <main className="flex h-svh items-center justify-center">
      <LoginForm />
    </main>
  );
}
