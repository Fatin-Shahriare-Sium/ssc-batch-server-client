import React from 'react'


const LoginButtonBox: React.FC<{ handler: () => any, icon: any, text: string }> = ({ handler, icon, text }) => {
    return (
        <div onClick={handler} className='loginButtonBox__wrapper'>
            <div className='loginButtonBox__icon'>
                <img src={icon} alt="ff" />
            </div>
            <div className='loginButtonBox__text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default LoginButtonBox
