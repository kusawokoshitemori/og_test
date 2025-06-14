export const config = { runtime: "edge" };
import { ImageResponse } from "@vercel/og";

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "Hello!";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#fff",
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1280,
      height: 630,
    }
  );
}
