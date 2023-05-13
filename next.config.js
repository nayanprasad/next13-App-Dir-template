/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    reactRefresh: true,
    eslint: {
        dirs: ["src"],

    },
    images: {
        domains: [],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },


};

module.exports = nextConfig;
