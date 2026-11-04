import type { Metadata } from "next";
import Home, { metadata as homeMetadata } from "../page";

// /v2 was the preview address for this homepage. It still works for links
// already shared, but it's a duplicate: canonical points at /.
export const metadata: Metadata = {
  ...homeMetadata,
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default Home;
