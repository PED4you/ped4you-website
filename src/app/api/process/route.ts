import { NextResponse } from "next/server"
import * as fs from "fs"

export async function GET() {
  return NextResponse.json({ hello: "world" }, { status: 200 })
}

export async function POST(req: Request) {
  const formData = await req.formData()

  const image = formData.get("image") as File
}
