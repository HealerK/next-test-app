import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";
import { prisma } from "@/prisma/client";

interface User {
  id: string;
  name: string | null;
  email: string | null;
}

interface Props {
  sortOrder?: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const users = await prisma.user.findMany();

  const sortedUsers = sort(users).asc(
    sortOrder === "name"
      ? (user) => user.name || ""
      : sortOrder === "email"
      ? (user) => user.email || ""
      : (user) => user.name || ""
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=firstName">First Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=lastName">Last Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
