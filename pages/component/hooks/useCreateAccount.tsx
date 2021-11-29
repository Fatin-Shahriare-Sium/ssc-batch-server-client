import { gql } from '@urql/core';
import React from 'react'
import { useMutation } from 'urql';
import { CreateStudentMutationResponses, MutationCreateStudentArgs } from '../../../generated/graphql';

let CREATE_ACCOUNT = gql`

mutation ($name:String!,$gmail:String!,$uid:String){
        createStudent(name:$name,gmail:$gmail,uid:$uid){
            msg
            success
            id
            gmail
         }
}

`

const useCreateAccount = () => {
    let [createAccountResponses, createAccoount] = useMutation<CreateStudentMutationResponses, MutationCreateStudentArgs>(CREATE_ACCOUNT)
    async function createStudentAccount(name: string, gmail: string, uid: any) {
        let result = await createAccoount({ name, gmail, uid })
        console.log('result', result);
        let { data } = result
        return { data }
    }
    return { createStudentAccount }
}

export default useCreateAccount;
