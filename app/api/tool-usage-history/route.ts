import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Payload {
  status: string;
  tool_name: string;
  notes: string;
}

export async function GET() {
  try {
    const dataHistory = await prisma.toolUsageHistories.findMany({
      take: 10,
      orderBy: { used_at: "desc" },
    });
    const dataCount = await prisma.toolUsageHistories.count();

    return NextResponse.json({
      status: 200,
      message: "Getted histories successfully",
      data: {
        count: dataCount,
        histories: dataHistory,
      },
    });
  } catch (e) {
    return NextResponse.json({ status: 500, message: e }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.replace("::ffff:", "");
    const data: Payload = await req.json();

    const history = await prisma.toolUsageHistories.create({
      data: {
        status: data.status,
        tool_name: data.tool_name,
        ip_address: ip as string,
        notes: data.notes,
      },
    });

    return NextResponse.json(
      { status: 201, message: "Created history successfully", data: history },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { status: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
