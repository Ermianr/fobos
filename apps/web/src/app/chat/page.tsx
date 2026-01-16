import { api } from "@fobos/backend/convex/_generated/api";

import { Logout } from "@/features/auth/components/logout";
import { UserInfo } from "@/features/chat/components/user-info";
import { ensureAuthenticated } from "@/lib/auth-guard";
import { preloadAuthQuery } from "@/lib/auth-server";

export default async function ChatPage() {
  await ensureAuthenticated();
  const preloadedUserQuery = await preloadAuthQuery(api.auth.getCurrentUser);

  return (
    <div>
      <UserInfo preloadedUserQuery={preloadedUserQuery} />
      <Logout />
    </div>
  );
}
