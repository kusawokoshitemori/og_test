import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

export default async function handler() {
  console.log("OG handler start");
  console.log("OG handler before return");
  return new ImageResponse(<div>Hello</div>, {
    width: 1200,
    height: 630,
  });
}
// test用コメントアウト
