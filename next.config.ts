import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.getyourguide.com", pathname: "/image/**" },
      { protocol: "https", hostname: "media1.thrillophilia.com", pathname: "/filestore/**" },
      { protocol: "https", hostname: "meetinsrilanka.com", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "thehaphazardtraveler.com", pathname: "/wp-content/uploads/**" },
    ],
  },
};

export default nextConfig;
