import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

const UserPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ sortOrder?: string }>;
}) => {
  return (
    <>
      <h1>User Page</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable params={searchParams} />
    </>
  );
};

export default UserPage;
