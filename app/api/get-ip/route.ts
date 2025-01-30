import { NextResponse } from "next/server";

export function GET(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.replace("::ffff:", "");
    const user_agent = req.headers.get("user-agent");

    return NextResponse.json(
      {
        status: 200,
        message: "OK",
        data: {
          ip: ip,
          userAgent: user_agent,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
