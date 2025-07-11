import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    ...require('dotenv').config({ path: require('path').resolve(__dirname, '../../Docker/.env') }).parsed,
  },
};

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

export default withNextIntl(nextConfig);
