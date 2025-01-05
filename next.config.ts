import type { NextConfig } from "next";
import { isDev } from "@/utils/environment";

const nextConfig: NextConfig = {
  output: "export",
  basePath: !isDev() ? "/frontend" : "",
};

export default nextConfig;
