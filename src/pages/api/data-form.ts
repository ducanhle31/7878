// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  href: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //lấy dữ liệu form từ wordpress
  const type = req?.query?.type || "";
  const api_url = process.env.API_URL || "";
  let id: string = "";
  let href: string = "";
  try {
    const responeWordpress = await fetch(`${api_url}/posts/?slug=${type}`, {
      next: { revalidate: 10 },
    });
    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.content.rendered : ``;

    const idRegex = /id="([^"]+)"/;
    const idMatch = htmlString.match(idRegex);
    id = idMatch ? idMatch[1] : "";

    // Sử dụng biểu thức chính quy để trích xuất chuỗi href
    const hrefRegex = /https:\/\/[^'"]+/;
    const hrefMatch: string[] = htmlString.match(hrefRegex);
    href = hrefMatch ? hrefMatch[0] : "";
  } catch (error) {
    console.log(error);
  }

  if (req.method === "GET") {
    res.status(200).json({
      id,
      href,
    });
  }
}
