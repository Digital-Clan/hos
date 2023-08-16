import { NextResponse } from "next/server";
import { previewClient } from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const { id, name, email, comment } = await request.json();

    await previewClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: id,
      },
      name,
      email,
      comment,
    });

    return NextResponse.json({ message: "This Worked", success: true });
  } catch (err) {
    return NextResponse.json({ message: err, success: false });
  }
}
