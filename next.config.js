// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // ไม่ให้ไฟล์ .svg ไปผ่าน file-loader เดิม
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test && rule.test.test && rule.test.test(".svg")
    );
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;

    // ใช้ SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
