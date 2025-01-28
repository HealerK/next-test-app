"use client";

import React from "react";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string; photoId: string }>;
}) {
  const id = (await params).id;
  const photoId = (await params).photoId;
  return (
    <div>
      {" "}
      PhotDetail: {id} {photoId}
    </div>
  );
}
