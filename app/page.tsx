import Link from "next/link";
import React from "react";
import ProductCart from "./components/ProductCart";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">User</Link>
      <br></br>
      <ProductCart />
    </>
  );
}
