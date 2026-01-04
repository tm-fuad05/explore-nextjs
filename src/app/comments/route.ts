export const revalidate = 0;
import { NextRequest } from "next/server";
import { Comments, comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("filter");
  const filteredComments = query
    ? comments.filter((c) => c.text.toLowerCase().includes(query))
    : comments;

  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment: Comments = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "content-type": "application/json" },
    status: 201,
  });
}
