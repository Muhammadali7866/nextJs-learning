import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  // Ensure params are awaited
  const id = params.id;
  if (parseInt(id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find((item) => item.id === parseInt(params.id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const { text } = await request.json();
  const index = comments.findIndex((_item) => _item.id === parseInt(params.id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deleteComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deleteComment);
}
