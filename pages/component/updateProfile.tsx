import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import useUpdateProfile from './hooks/useUpdateProfile'
import useProfileData from './hooks/useProfileData'
import { QueryProfileDataArgs, UpdateProfileMutationResponses } from '../../generated/graphql';
import { useQuery } from 'urql';



const UpdateProfile: React.FC<{ studentUid: string }> = ({ studentUid }) => {
    let { updateProfilex } = useUpdateProfile()
    let { PROFILE_DATA } = useProfileData()
    let [edit, setEdit] = useState(false)
    let [loading, setLoading] = useState(false)
    let [{ data }, reexecuteQuery] = useQuery<{ profileData: UpdateProfileMutationResponses }, QueryProfileDataArgs>({
        query: PROFILE_DATA,
        variables: { userUid: studentUid },


    })
    let [initialValues, setinitialValues] = useState({
        name: '',
        fathername: '',
        gmail: '',
        rollNumber: '',
        phoneNumber: 0,
        birthDate: '',
        birthplace: '',
        currentlocation: '',
        hobby: '',
        studingAt: '',
        studiedAt: '',
        workingAs: '',
        facebook: '',
        twitter: '',
        tiktok: '',
        youtube: ''


    })

    function toggleEdit() {
        return setEdit(pre => !pre)
    }

    useEffect(() => {

        if (data) {
            console.log('profileDatsaa', data)
            let { profileData } = data
            setinitialValues({
                ...initialValues,
                name: profileData.name!,
                fathername: profileData.fathername!,
                gmail: profileData.gmail!,
                rollNumber: profileData.rollNumber!,
                phoneNumber: parseInt(`0${profileData.phoneNumber!}`),
                birthDate: profileData.birthDate!,
                birthplace: profileData.birthplace!,
                currentlocation: profileData.currentlocation!,
                hobby: profileData.hobby!,
                studingAt: profileData.studingAt!,
                studiedAt: profileData.studiedAt!,
                workingAs: profileData.workingAs!,
                facebook: profileData.socialLinks?.facebook!,
                twitter: profileData.socialLinks?.twitter!,
                tiktok: profileData.socialLinks?.tiktok!,
                youtube: profileData.socialLinks?.youtube!

            })
        }
    }, [data])


    useEffect(() => {
        console.log('initialValuesi', initialValues);

    }, [initialValues])

    let formik = useFormik({
        initialValues: initialValues,
        onSubmit: async ({ name, fathername, gmail, phoneNumber, birthDate, birthplace, rollNumber, currentlocation, hobby, studingAt, studiedAt, facebook, twitter, tiktok, youtube, workingAs }) => {

            console.log('phoneNumber', phoneNumber);

            setLoading(true)
            let x = await updateProfilex(studentUid, name, fathername, gmail, phoneNumber, rollNumber, birthDate, birthplace, currentlocation, hobby, studingAt, studiedAt, workingAs, facebook, twitter, tiktok, youtube)

            if (x) {
                toggleEdit()
                localStorage.setItem('_studentName', x.updateProfile?.name!)!
                setLoading(false)
            }

        },
        enableReinitialize: true

    })



    return (
        <div className='mt-5'>
            <div className='update__profile-wrapper '>
                <p style={{ fontSize: "2rem", fontWeight: '700' }}>Your Profile Details:</p>
                <form className='mt-5' onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input disabled={!edit ? true : false} id='name' name='name' type="text" onChange={formik.handleChange} value={formik.values.name} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Father Name</label>
                        <input disabled={!edit ? true : false} id='fathername' name='fathername' type="text" onChange={formik.handleChange} value={formik.values.fathername} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gmail address</label>
                        <input disabled={!edit ? true : false} id='gmail' name='gmail' type="email" onChange={formik.handleChange} value={formik.values.gmail} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input disabled={!edit ? true : false} id='phoneNumber' name='phoneNumber' type="number" onChange={formik.handleChange} value={formik.values.phoneNumber} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Roll Number</label>
                        <input disabled={!edit ? true : false} id='rollNumber' name='rollNumber' type="text" onChange={formik.handleChange} value={formik.values.rollNumber} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birth Date</label>
                        <input disabled={!edit ? true : false} id='birthDate' name='birthDate' type="date" onChange={formik.handleChange} value={formik.values.birthDate} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birth Place</label>
                        <input disabled={!edit ? true : false} id='birthplace' name='birthplace' type="text" onChange={formik.handleChange} value={formik.values.birthplace} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Current Location</label>
                        <input disabled={!edit ? true : false} id='currentlocation' name='currentlocation' type="text" onChange={formik.handleChange} value={formik.values.currentlocation} className="form-control" aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Hobbies</label>
                        <input disabled={!edit ? true : false} id='hobby' name='hobby' type="text" className="form-control" onChange={formik.handleChange} value={formik.values.hobby} aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Studying At</label>
                        <input disabled={!edit ? true : false} id='studingAt' name='studingAt' type="text" className="form-control" onChange={formik.handleChange} value={formik.values.studingAt} aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Studied At</label>
                        <input disabled={!edit ? true : false} id='studiedAt' name='studiedAt' type="text" className="form-control" onChange={formik.handleChange} value={formik.values.studiedAt} aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Working As</label>
                        <input disabled={!edit ? true : false} placeholder='student/teacher/logo designer etc' id='workingAs' name='workingAs' type="text" className="form-control" onChange={formik.handleChange} value={formik.values.workingAs} aria-describedby="emailHelp" />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    {/* social links container */}
                    <div className='update__profile-social-links'>
                        <p>Social Media Links</p>
                        <div className="mb-3">
                            <label className="form-label">Facebook</label>
                            <input disabled={!edit ? true : false} id='facebook' name='facebook' onChange={formik.handleChange} value={formik.values.facebook} type="text" className="form-control" aria-describedby="emailHelp" />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Twitter</label>
                            <input disabled={!edit ? true : false} id='twitter' name='twitter' type="text" onChange={formik.handleChange} value={formik.values.twitter} className="form-control" aria-describedby="emailHelp" />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">TikTok</label>
                            <input disabled={!edit ? true : false} id='tiktok' name='tiktok' type="text" onChange={formik.handleChange} value={formik.values.tiktok} className="form-control" aria-describedby="emailHelp" />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Youtube</label>
                            <input disabled={!edit ? true : false} id='youtube' name='youtube' type="text" className="form-control" onChange={formik.handleChange} value={formik.values.youtube} aria-describedby="emailHelp" />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>


                    </div>

                    <div className='update-profile__bottom-btn'>
                        {edit ? <>
                            <button type='button' onClick={toggleEdit} className='btn btn-danger'>Cancel</button>
                            <button type='submit' className='btn btn-outline-primary mx-3'>{
                                loading ? 'saving...' : 'update'
                            }</button>
                        </>
                            :
                            <button type='button' onClick={toggleEdit} className='btn btn-dark'>Edit Profile</button>
                        }



                    </div>
                </form>
            </div>
        </div>

    )
}

export default UpdateProfile;

