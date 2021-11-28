import React from 'react'
import Link from 'next/link'
const SingleTab: React.FC<{ icon: string, tabName: string, active: boolean, href: string }> = ({ icon, tabName, active, href }) => {
    return (
        <Link href={href}>
            <div className={active ? 'singleTab__wrapper singleTab-active' : 'singleTab__wrapper'}>
                <div>
                    <img src={icon} alt="" />

                </div>
                <div style={{ width: '70%', marginLeft: '7%' }}>
                    <p>{tabName}</p>
                </div>
            </div>
        </Link>
    )
}

export default SingleTab;
