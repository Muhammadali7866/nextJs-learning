import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = await headers();
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log("hello");

  // for cookie
  let theme = request.cookies.get("them");
  console.log({ theme });

  // using next cookie fucntion
  (await cookies()).set("resultsPerPage", "20");

  console.log((await cookies()).get("resultsPerPage"));

  return new Response("Profile API data", {
    headers: {
      "content-type": "text/html",
      "Set-Cookie": "them=dark",
    },
  });
}
