import NextAuth, { type NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import type { GithubProfile } from "next-auth/providers/github";

const ALLOWED_USERS = ["khraosgenetor"];

export const authOptions: NextAuthOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ profile, account }) {
            // profile has type `Profile | undefined` by default
            if (!profile || account?.provider !== "github") return false;

            const githubProfile = profile as GithubProfile; // safe cast for GitHub
            return ALLOWED_USERS.includes(githubProfile.login);
        },
    },
};

export default NextAuth(authOptions);
