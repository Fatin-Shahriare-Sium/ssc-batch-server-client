import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
const Dasboard = () => {

    const [session, loading] = useSession()
    let [name, setName] = useState<string>('')
    useEffect(() => {

        if (!loading) {
            localStorage.setItem('_studentUid', session!.user!.uid!)
        }
    }, [loading])

    useEffect(() => {
        let studentName = localStorage.getItem('_studentName')!


        if (studentName == 'undefined' || studentName == null) {
            console.log(studentName, session?.user?.name!);
            setName(session?.user?.name!)
        } else {
            setName(studentName)
        }
    }, [loading])
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="dasboard-weolcome">
                <p>Welcome,to your data center</p>
                <br />
                <p>{name} <span>.</span></p>
            </div>
        </div>
    )
}

export default Dasboard
