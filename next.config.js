/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Since this is an auth page that needs dynamic functionality
  // You might want to exclude it from static export
  images: {
    unoptimized: true,
  },
  // Optional: Enable trailing slashes if needed
  trailingSlash: true,
}

export default nextConfig
