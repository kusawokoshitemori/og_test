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
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#fff",
          color: "#222",
          fontSize: 64,
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
