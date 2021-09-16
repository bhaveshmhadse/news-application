/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://newsapi.org/:path*", // Proxy to Backend
      },
    ];
  },
};
