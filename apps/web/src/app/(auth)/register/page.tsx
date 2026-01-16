import { RegisterForm } from "@/features/auth/components";
import { ensureUnauthenticated } from "@/lib/auth-guard";

export default async function RegisterPage() {
  await ensureUnauthenticated();
  return (
    <main className="flex h-svh items-center justify-center">
      <RegisterForm />
    </main>
  );
}
