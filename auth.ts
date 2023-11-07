import { NextAuthOptions } from "next-auth";

export const authOptions:NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
} satisfies NextAuthOptions;

function GoogleProvider(arg0: { clientId: string; clientSecret: string; }): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.");
}
