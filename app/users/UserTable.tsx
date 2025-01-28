import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";
import { prisma } from "@/prisma/client";

const UserTable = async ({
  params,
}: {
  params: Promise<{ sortOrder?: string }>;
}) => {
  const users = await prisma.user.findMany();
  const sortOrder = (await params).sortOrder;

  const sortedUsers = sort(users).asc(
    sortOrder === "name"
      ? (user) => user.username || ""
      : sortOrder === "email"
        ? (user) => user.email || ""
        : (user) => user.name || ""
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=username">UserName</Link>
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
