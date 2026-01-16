"use client";

import { Button } from "@base-ui/react/button";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

export function Logout() {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.refresh();
            },
          },
        })
      }
    >
      Logout
    </Button>
  );
}
