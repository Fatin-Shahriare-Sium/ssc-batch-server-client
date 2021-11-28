import React, { useEffect, useState } from 'react'
import UpdateProfile from '../component/updateProfile';
import { useSession } from 'next-auth/client'
import StudentProfilePicture from '../component/studentProfilePicture';
const Profile = () => {
    const [session, loading] = useSession()
    let [studentUid, setStudentUid] = useState('')
    useEffect(() => {

        setStudentUid(localStorage.getItem('_studentUid')!)

    }, [loading])
    return (
        <div className='dasboard-profile'>
            <div className='dasboard-profile__wrapper'>
                {studentUid ? <StudentProfilePicture studentUid={studentUid} /> : <p>loading...</p>}
                {studentUid ? <UpdateProfile studentUid={studentUid} /> : <p>loading...</p>}
            </div>
        </div>
    )
}

export default Profile
