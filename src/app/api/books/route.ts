
// src/app/api/books/route.ts
import { NextResponse } from "next/server";
import books from "@/data/booksData.json";

export async function GET() {
  return NextResponse.json(books);
}