import { NextResponse } from "next/server";
import connection from "@/config/db";

export async function GET() {
  try {
    const result = await connection.query("SELECT * FROM coupons");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
