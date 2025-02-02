import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { dptauth: string } }
) {
  const reqq = params.dptauth;

  return NextResponse.json(reqq);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { dptauth: string } }
) {
  console.log(await request.formData());

  const HeaderAuthKey = request.headers.get("Auth-Key");
  const SystemAuthKey = process.env.AUTH_SECRET_KEY;

  const { dptauth } = await params;

  return NextResponse.json({ HeaderAuthKey, dptauth, SystemAuthKey });
}
