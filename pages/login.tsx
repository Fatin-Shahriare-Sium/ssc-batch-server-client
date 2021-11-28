import React from 'react'
import { signIn } from 'next-auth/client'
import LoginButtonBox from './component/loginButtonBox'
import useUrl from './component/hooks/useUrl'
const Login = () => {
    let { url } = useUrl()
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
                <p style={{ fontSize: '3rem', fontWeight: '700' }}>Login to your Data Center</p>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', marginTop: '.75rem' }}>
                    <LoginButtonBox handler={() => signIn('google', { callbackUrl: `https://ssc-batch-server-client.vercel.app/dasboard` })} icon='./google.svg' text='signup with google' />

                </div>

            </div>

        </div>
    )
}

export default Login;
