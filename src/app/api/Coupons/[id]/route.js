import { NextResponse } from "next/server";
import connection from "@/config/db";
export async function GET(request, { params }) {
  try {
    const result = await connection.query(
      "SELECT * FROM coupons WHERE id = ?",
      [params.id]
    );
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(request) {
  try {
    const { name, description, code, discount, validity } =
      await request.json();

    const result = await pool.query("INSERT INTO coupons SET ?", {
      name,
      description,
      code,
      discount,
      validity,
    });

    return NextResponse.json({
      name,
      description,
      code,
      discount,
      validity,
      id: result.insertId,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connection.query("DELETE FROM coupon WHERE id = ?", [params.id]);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
