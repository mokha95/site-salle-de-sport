import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";

// adapter est prisma , on utilise nos credential 
export const authOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
          // credentials correspond a un email et passwords a un user
        name: "credentials",
  
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "hello@example.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials.email || !credentials.password) {
            throw new Error("Svp, entrez un email et un mot de passe.");
          }
//   on cherche ds la base de données l 'utilisateur qui a cette email
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
  
          if (!user) {
            throw new Error("Cet email n'est pas inscrit.");
          }
        //   bcrypt va decrypter le mot de passe qui est en base de donnée et le comparer à celui du formulaire.
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
        //   throw va empecher l'execution du code
          if (!passwordMatch) {
            throw new Error("Le mot de passe est érroné")
        }

        return user;
      },
    }),
  ],

  callbacks: {
    // on va utiliser la fonction signIn qui va nous retourner un user ou une erreur
    async signIn(user) {
      try {
        //the user object is wrapped in another user object so extract it
        user = user.user;
        if (typeof user.id !== typeof undefined) {
          console.log(user);
          return user;
        } else {
          console.log("User id was undefined");
          return false;
        }
      } catch (err) {
        console.error("Signin callback error:", err);
      }
    },
    async jwt({ token, user }) {
        return Promise.resolve(token); 
    },
    
    // la session restera tant qu on a pas fait signOut()
    async session({ session, user, token }) {
      return Promise.resolve(session);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };