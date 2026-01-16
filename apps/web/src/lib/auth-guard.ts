import { redirect } from "next/navigation";

import { isAuthenticated } from "./auth-server";

export async function ensureAuthenticated() {
  if (!(await isAuthenticated())) {
    redirect("/login");
  }
}

export async function ensureUnauthenticated() {
  if (await isAuthenticated()) {
    redirect("/chat");
  }
}
