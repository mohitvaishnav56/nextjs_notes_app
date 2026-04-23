import { dbConnect } from "@/lib/db";
import Note from "@/models/Note";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const note = await Note.create(body);
    return NextResponse.json({ success: true, data: note }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 400 },
    );
  }
}
