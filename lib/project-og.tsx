import { ImageResponse } from "next/og";

const API_BASE_URL =
  process.env.PYSRAWEB_API_BASE ?? "https://pysraweb.saketlab.org/api";

type ProjectKind = "geo" | "sra";

type ProjectPayload = {
  title?: string | null;
};

export const projectOgSize = {
  width: 1200,
  height: 630,
};

export const projectOgContentType = "image/png";

const labelByKind: Record<ProjectKind, string> = {
  geo: "GEO Series",
  sra: "SRA Study",
};

async function fetchProjectTitle(accession: string): Promise<string> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/project/${encodeURIComponent(accession)}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return accession;
    }

    const payload = (await response.json()) as ProjectPayload;
    return payload.title?.trim() || accession;
  } catch {
    return accession;
  }
}

export async function generateProjectOgImage(
  accession: string,
  kind: ProjectKind,
) {
  const title = await fetchProjectTitle(accession);
  const sourceLabel = labelByKind[kind];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 60px",
          color: "#f8fafc",
          background:
            "radial-gradient(circle at top right, #818cf8 0%, #4338ca 45%, #1e1b4b 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 18px",
            borderRadius: "9999px",
            fontSize: 30,
            fontWeight: 700,
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            border: "2px solid rgba(148, 163, 184, 0.4)",
          }}
        >
          {sourceLabel}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#cbd5e1",
            }}
          >
            {accession}
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#e0e7ff",
            }}
          >
            pysraweb.saketlab.org
          </div>
        </div>
      </div>
    ),
    projectOgSize,
  );
}
