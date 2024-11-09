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
