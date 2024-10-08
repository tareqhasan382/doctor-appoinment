import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectMongodb } from "../../../../../lib/mongodb";
import UserModel from "../../../../../lib/models/UserModel";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        // console.log("credentials data:", credentials);
        try {
          await connectMongodb();
          if (!credentials) return null;
          const { email, password } = credentials;
          const user = await UserModel.findOne({ email });

          if (!user) return null;

          const isMatchPassword = await bcrypt.compare(password, user.password);
          if (!isMatchPassword) return null;

          return user;
        } catch (error) {
          //console.error("Authorization Error:", error); // Log error for debugging
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
    error: "/error",
    newUser: "/sign-up",
  },
  callbacks: {
    async jwt({ user, trigger, session, token }) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user?.image,
        };
      }
      if (trigger === "update" && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
