import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/ghrepo",
                destination: "https://github.com/khraosgenetor/khraos.in",
                permanent: true
            }
        ];
    }
};

export default nextConfig;
