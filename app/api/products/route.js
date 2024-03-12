import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 200 });
  } finally {
    await prisma.$disconnect();
  }
}
