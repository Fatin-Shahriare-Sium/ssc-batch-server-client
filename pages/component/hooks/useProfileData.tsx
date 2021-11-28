import { gql } from '@urql/core';
import { useSession } from 'next-auth/client'


let PROFILE_DATA = gql`

query ($userUid:String!){
    profileData(userUid:$userUid){
        name,
        profileImg,
        fathername,
        rollNumber,
        gmail,
        phoneNumber,
        birthDate,
        birthplace,
        currentlocation,
        hobby,
        studingAt,
        studiedAt,
        workingAs,
        socialLinks{
            facebook,
            twitter,
            tiktok,
            youtube
        }
    }
}

`

const useProfileData = () => {
    const [session, loading] = useSession()

    return { PROFILE_DATA }



}

export default useProfileData;