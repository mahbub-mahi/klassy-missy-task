// pages/api/getData.js
import connection from "@/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await connection.query("SELECT * FROM user");
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
