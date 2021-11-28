import React, { ReactChild, ReactChildren, ReactNode } from 'react'

const Offcanvas: React.FC<{ children: ReactNode, handleCanvas: () => any }> = ({ children, handleCanvas }) => {
    return (
        <div>
            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <p style={{ fontSize: '3rem', fontWeight: '700', textAlign: 'center' }}>Data Center</p>
                    <button type="button" style={{ fontSize: "2rem" }} onClick={handleCanvas} className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        {children}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Offcanvas
