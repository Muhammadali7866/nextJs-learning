import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
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
