import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 50% 45%, #2a1458 0%, #140A1F 42%, #050505 78%)",
          color: "#f4f1ec",
        }}
      >
        <div style={{ fontSize: 132, letterSpacing: 28, fontWeight: 500 }}>GRAIR</div>
        <div style={{ marginTop: 18, fontSize: 28, letterSpacing: 10, color: "#cfc9ff" }}>
          POWER WITHOUT NOISE
        </div>
      </div>
    ),
    size,
  );
}
