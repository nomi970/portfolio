import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "Numan-CV.pdf");
    const fileBuffer = await readFile(filePath);

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      "attachment; filename=\"Numan-Arshad-CV.pdf\"; filename*=UTF-8''Numan-Arshad-CV.pdf"
    );
    headers.set("Content-Length", fileBuffer.length.toString());
    headers.set("Cache-Control", "no-store");

    return new NextResponse(fileBuffer, { status: 200, headers });
  } catch {
    return new NextResponse("CV not found", { status: 404 });
  }
}
