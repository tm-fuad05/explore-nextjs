export const dynamic = "force-static";
import { NextRequest } from "next/server";
import { Comments, comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log(request.nextUrl);
  const query = searchParams.get("kire");

  const filteredComments = query
    ? comments.filter((c) => c.text.toLowerCase().includes(query))
    : comments;

  return Response.json(filteredComments);
}
