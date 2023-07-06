"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Eve() {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div>
      testing
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
