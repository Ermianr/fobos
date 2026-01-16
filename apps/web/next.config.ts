import type { NextConfig } from "next";

import "@fobos/env/web";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
};

export default nextConfig;
