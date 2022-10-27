import React, { FC } from 'react'

import './Divider.css'

const Divider: FC = () => {
    return (
        <>
            <div className="divider h-2 rounded-xl border-b-2 my-3 border-solid border-blue" />
            {/* <div className="h-2 rounded-lg border-t-2 my-0 border-solid border-gray" /> */}
        </>
    )
}

export default Divider
