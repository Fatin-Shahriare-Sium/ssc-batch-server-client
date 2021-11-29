import React from 'react'

const useUrl = () => {
    let url = 'https://ssc-batch-server.herokuapp.com/graphql'
    let redirectUrl = 'https://ssc-batch-server.herokuapp.com/dasboard'
    // let url = 'http://localhost:5000/'
    // let redirectUrl = 'http://localhost:3000/dasboard'
    return { url, redirectUrl }
}

export default useUrl
