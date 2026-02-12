import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background: "#ffffff",
          fontFamily: "-apple-system, SF Pro Display, system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "60%",
            height: "120%",
            background: "radial-gradient(circle at center, #6366f140 0%, #8b5cf620 40%, transparent 70%)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "50%",
            height: "100%",
            background: "radial-gradient(circle at center, #0ea5e930 0%, #10b98120 40%, transparent 70%)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            zIndex: 1,
            padding: "80px",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "-0.04em",
              display: "flex",
              marginBottom: 8,
            }}
          >
            pysraweb
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#666666",
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: "700px",
              display: "flex",
            }}
          >
            Explore sequencing datasets with unified metadata
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 32,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: 18,
                fontWeight: 600,
                backgroundColor: "#f5f5f7",
                color: "#1a1a1a",
              }}
            >
              GEO
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: 18,
                fontWeight: 600,
                backgroundColor: "#f5f5f7",
                color: "#1a1a1a",
              }}
            >
              SRA
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: 18,
                fontWeight: 600,
                backgroundColor: "#f5f5f7",
                color: "#1a1a1a",
              }}
            >
              ENA
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: 18,
                fontWeight: 600,
                backgroundColor: "#f5f5f7",
                color: "#1a1a1a",
              }}
            >
              ArrayExpress
            </div>
          </div>

          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#999999",
              marginTop: 48,
              display: "flex",
            }}
          >
            pysraweb.saketlab.org
          </div>
        </div>
      </div>
    ),
    size,
  );
}
