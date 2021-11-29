import { log } from "console"
import NextAuth from "next-auth"
import Providers from 'next-auth/providers'
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: "767133034347-bfrqop8lch9i8rth55t8abk4m0p1lk71.apps.googleusercontent.com",
            clientSecret: "jlTX3k7YErRgNSS-XVzJwSnP"
        })
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        jwt: async (token, user, account, profile, isNewUser) => {
            console.log(user)


            if (user) { //-- if success, store the id of the user in jwt token
                token.uid = user.id;
                fetch('https://ssc-batch-server-client.vercel.app/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `mutation ($name:String!,$gmail:String!,$uid:String){
                            createStudent(name:$name,gmail:$gmail,uid:$uid){
                                msg
                                success
                                id
                                gmail
                            }
                        }
                        `,
                        variables: {
                            gmail: user.email,
                            name: user.name,
                            uid: user.id
                        },
                    })
                })
                    .then((res) => res.json())
                    .then(({ data }) => {
                        let { createStudent } = data
                        console.log(data);

                    });
            }
            return Promise.resolve(token);
        },

        session: async (session, user) => {

            session.user.uid = user.uid;    //-- store the id of the user in the session data
            return Promise.resolve(session);
        },
        redirect: async (url, baseUrl) => {
            console.log('URL', url)
            return Promise.resolve(url)
        }
    },


})
//101433735038049947207