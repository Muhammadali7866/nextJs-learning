import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filterComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filterComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  let newComent = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComent);
  return new Response(JSON.stringify(newComent), {
    headers: { "content-type": "application/json" },
    status: 201,
  });
}
