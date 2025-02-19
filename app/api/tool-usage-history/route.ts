import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Payload {
  status: string;
  tool_name: string;
  ip_address: string;
  notes: string;
}

export async function GET() {
  try {
    const dataHistory = await prisma.toolUsageHistories.findMany();
    // const countHistory = await prisma.toolUsageHistories.count();

    return NextResponse.json({
      status: 200,
      message: "Getted histories successfully",
      data: {
        histories: dataHistory,
      },
    });
  } catch (e) {
    return NextResponse.json({ status: 500, message: e }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data: Payload = await req.json();

    const history = await prisma.toolUsageHistories.create({
      data: {
        status: data.status,
        tool_name: data.tool_name,
        ip_address: data.ip_address,
        notes: data.notes,
      },
    });

    return NextResponse.json(
      { status: 201, message: "Created history successfully", data: history },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { status: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
