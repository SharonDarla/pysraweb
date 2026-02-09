"use client";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import the appropriate project page component
const GeoProjectPage = dynamic(() => import("@/components/geo-project-page"), {
  ssr: false,
});

const SraProjectPage = dynamic(() => import("@/components/sra-project-page"), {
  ssr: false,
});

export default function UnifiedProjectPage() {
  const params = useParams();
  const accession = params.accession as string | undefined;

  // Detect project type from accession prefix
  // GEO projects start with G (GSE, GPL, GDS, etc.)
  // SRA projects start with S, E, D (SRP, ERP, DRP, etc.)
  const isGeoProject = accession?.startsWith("G");

  if (isGeoProject) {
    return <GeoProjectPage />;
  }

  return <SraProjectPage />;
}
