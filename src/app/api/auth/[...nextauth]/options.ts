import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import  { prisma }  from '../../../lib/prisma';
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
              email: { label: "Email", type: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
              // This is where you need to retrieve user data to verify with credentials
              // Docs: https://next-auth.js.org/configuration/providers/credentials
              const { email, password } = credentials ?? {}
              if (!email || !password) {
                throw new Error("Missing username or password");
              }
              // Find user with email input
              const user = await prisma.user.findUnique({
                where: {
                  email: email
                },
              });
              // if user doesn't exist or password doesn't match
              if (!user || !(await compare(password, user.password))) {
                throw new Error("Invalid username or password");
              }
              return user;
            },
          }),
    ],
}