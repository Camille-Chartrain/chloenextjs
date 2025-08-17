/** @type {import('next').NextConfig} */

import path from "path";
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "app/style")],
  },
};

export default nextConfig;
