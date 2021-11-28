import { gql } from '@urql/core'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'urql'
import { MutationUpdateProfilePicArgs, UpdateProfilePicResponses } from '../../generated/graphql'
import useProfileData from './hooks/useProfileData'
import { QueryProfileDataArgs, UpdateProfileMutationResponses } from '../../generated/graphql';
let UPDATE_PROFILE_PIC = gql`
    mutation($userUid:String,$src:String,$alt:String){
        updateProfilePic(userUid:$userUid,src:$src,alt:$alt){
            success
            msg
        }
    }
`


const StudentProfilePicture: React.FC<{ studentUid: string }> = ({ studentUid }) => {

    let [_x, updateProfilePic] = useMutation<{ updateProfilePic: UpdateProfilePicResponses }, MutationUpdateProfilePicArgs>(UPDATE_PROFILE_PIC)
    let { PROFILE_DATA } = useProfileData()
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState({ msg: '' })
    let [{ data }, reexecuteQuery] = useQuery<{ profileData: UpdateProfileMutationResponses }, QueryProfileDataArgs>({
        query: PROFILE_DATA,
        variables: { userUid: studentUid },

    })
    let [profilePicData, setProfilePicData] = useState({ files: '' })
    let [toggleBottom, setToggleBottom] = useState(false)

    function changeProfilePic(e: any) {
        setToggleBottom(pre => !pre)
        let imgElement = document.getElementById('profileIMG') as HTMLImageElement
        let url = URL.createObjectURL(e.target.files![0])
        console.log(url);
        imgElement.src = url
        return setProfilePicData({ files: e.target.files![0] })

    }

    let handleCancel = () => {
        let imgElement = document.getElementById('profileIMG') as HTMLImageElement
        imgElement.src = data?.profileData!.profileImg!
        return setToggleBottom(false)

    }

    async function handleUpdate() {
        setToggleBottom(pre => !pre)
        setLoading(pre => !pre)
        let imgData = profilePicData.files
        const dataX = new FormData();
        dataX.append('file', imgData)
        dataX.append('upload_preset', 'taskman');
        let res = await fetch('https://api.Cloudinary.com/v1_1/sium/image/upload', {
            method: 'POST',
            body: dataX
        })

        let datax = await res.json()

        let { url, asset_id } = datax

        let x = await updateProfilePic({ userUid: localStorage.getItem('_studentUid'), src: url, alt: data?.profileData.name })

        console.log(x);
        if (x.data?.updateProfilePic.success) {
            showAlert(x.data.updateProfilePic.msg!)
        }


    }

    function showAlert(msg: string) {
        let alertText = document.getElementById("show-message")
        alertText!.innerText = msg
        alertText!.style.display = 'block'

        setTimeout(() => {
            alertText!.style.display = 'none'
            return setLoading(false)
        }, 5000);
    }

    return (
        <div className='student-profile__picture-wrapper'>
            <p>Your Picture</p>
            <div className='student-profile__picture-shower'>

                <img id='profileIMG' src={data?.profileData?.profileImg!} alt="" />

                <div className='student-profile__picture-bottom'>

                    <div>
                        {toggleBottom ?
                            <>
                                <button onClick={handleCancel} className='btn btn-outline-danger' >Cancel</button>
                                <button onClick={handleUpdate} className='btn btn-outline-success mx-5'>Update</button>
                            </>


                            :
                            <button className='btn btn-primary change-input-btn'>
                                {loading ? 'loading...' : 'change'}
                                <input onChange={(event) => changeProfilePic(event)} type="file" name="" id="" />
                            </button>}

                    </div>
                </div>
                <p id='show-message' className='alert alert-success mt-3' style={{ textAlign: 'center', display: 'none' }}></p>
            </div>

        </div>
    )
}

export default StudentProfilePicture;

