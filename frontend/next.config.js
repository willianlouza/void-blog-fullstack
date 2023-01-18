/** @type {import('next').NextConfig} */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
