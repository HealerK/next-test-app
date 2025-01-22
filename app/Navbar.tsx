"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 items-center gap-5">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {status === "loading" && (
        <span className="ml-auto loading loading-dots loading-md"></span>
      )}
      {status === "authenticated" && (
        <div className="ml-auto flex gap-5">
          <span>{session.user?.name || session.user?.email}</span>
          <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      )}

      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="ml-auto">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
