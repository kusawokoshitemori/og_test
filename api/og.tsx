import { ImageResponse } from "@vercel/og";

export default async function handler(req: Request) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Noto Sans JP",
          data: await fetch(
            new URL("./NotoSans-Regular.ttf", import.meta.url)
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
