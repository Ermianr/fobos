"use client";

import type { api } from "@fobos/backend/convex/_generated/api";

import { usePreloadedQuery, type Preloaded } from "convex/react";

export function UserInfo({
  preloadedUserQuery,
}: {
  preloadedUserQuery: Preloaded<typeof api.auth.getCurrentUser>;
}) {
  const user = usePreloadedQuery(preloadedUserQuery);

  return (
    <div>
      <ul>
        <li>Name: {user?.name}</li>
        <li>Email: {user?.email}</li>
        <li>Username: {user?.name}</li>
        <li>Image: {user?.image}</li>
        <li>Created At: {user?.createdAt}</li>
        <li>Updated At: {user?.updatedAt}</li>
      </ul>
    </div>
  );
}
