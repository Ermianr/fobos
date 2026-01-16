import { Input } from "@/features/chat/components/input";
import { ensureAuthenticated } from "@/lib/auth-guard";

export default async function ChatPage() {
  await ensureAuthenticated();

  return (
    <div className="flex h-dvh">
      <main>
        <Input />
      </main>
    </div>
  );
}
