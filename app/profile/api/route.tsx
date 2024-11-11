import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = await headers();
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log("hello");

  return new Response("Profile API data", {
    headers: {
      "content-type": "text/html",
    },
  });
}
