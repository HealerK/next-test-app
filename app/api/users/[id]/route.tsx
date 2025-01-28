// app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ✅ Keep as Promise
) {
  try {
    // ✅ Properly await the params Promise
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user
      ? NextResponse.json(user)
      : NextResponse.json({ error: "User not found" }, { status: 404 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // Ensure params is a Promise
) {
  const body = await request.json();
  const { id } = await params; // Await the params to access id

  // Assume schema is defined for validation
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }

  const updateUser = await prisma.user.update({
    where: { id },
    data: {
      username: body.username,
      email: body.email,
    },
  });

  return NextResponse.json(updateUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // Ensure params is a Promise
) {
  const { id } = await params; // Await the params to access id

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }

  await prisma.user.delete({
    where: { id },
  });

  return NextResponse.json({});
}
