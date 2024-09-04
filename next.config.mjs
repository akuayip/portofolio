/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Memungkinkan gambar dari semua hostname dengan protokol HTTPS
      },
    ],
  },
  swcMinify: false, // Menonaktifkan SWC minifikasi untuk menghindari masalah saat build

  compiler: {
    styledComponents: true, // Jika Anda menggunakan styled-components, tambahkan opsi ini
  },
};

export default nextConfig;
