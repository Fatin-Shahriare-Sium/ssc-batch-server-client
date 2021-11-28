import { gql } from '@urql/core';
import React from 'react'
import { useMutation } from 'urql';
import { MutationUpdateProfileArgs, UpdateProfileMutationResponses } from '../../../generated/graphql';



let UPDATE_PROFILE = gql`

mutation (
    $userUid:String,
    $name: String,
    $fathername: String,
    $gmail: String,
    $rollNumber:String,
    $phoneNumber: Int,
    $birthDate: String,
    $birthplace: String,
    $currentlocation: String,
    $hobby: String,
    $studingAt: String,
    $studiedAt: String,
    $workingAs: String,
    $facebook: String,
    $twitter: String,
    $tiktok: String,
    $youtube: String
    ){

        updateProfile(userUid:$userUid,name:$name,fathername:$fathername,gmail:$gmail,phoneNumber:$phoneNumber,rollNumber:$rollNumber,birthDate:$birthDate,
            birthplace:$birthplace,currentlocation:$currentlocation,hobby:$hobby,studingAt:$studingAt,studiedAt:$studiedAt,
            workingAs:$workingAs,facebook:$facebook,twitter:$twitter,tiktok:$tiktok,youtube:$youtube){
                            name,
                            fathername,
                            gmail,
                            rollNumber,
                            phoneNumber,
                            birthDate,
                            birthplace,
                            currentlocation,
                            hobby,
                            studingAt,
                            studiedAt,
                            workingAs
                            # facebook,
                            # twitter,
                            # tiktok,
                            # youtube


            }
    }




`




const useUpdateProfile = () => {
    let [updateProfileResult, updateProfile] = useMutation<{ updateProfile: UpdateProfileMutationResponses }, MutationUpdateProfileArgs>(UPDATE_PROFILE)

    async function updateProfilex(userUid: string, name: any, fathername: any, gmail: any, phoneNumber: any, rollNumber: any, birthDate: any, birthplace: any, currentlocation: any, hobby: any, studingAt: any, studiedAt: any, workingAs: any, facebook: any, twitter: any, tiktok: any, youtube: any) {

        let result = await updateProfile({ userUid, name, fathername, gmail, rollNumber, phoneNumber, birthDate, birthplace, currentlocation, hobby, studingAt, studiedAt, workingAs, facebook, twitter, tiktok, youtube })
        console.log('updateprofileResponses', result);
        return { ...result.data }

    }

    return { updateProfilex }
}

export default useUpdateProfile;

