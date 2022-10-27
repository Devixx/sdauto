import React, { FC } from 'react'
import { LogoImg } from '../../assets'

const Logo: FC = () => {
    return (
        <div className="flex items-center gap-2">
            <img
                className="h-8 w-8"
                src={LogoImg}
                alt="Your Company"
            />
            <h2 className='font-bold'>SD automobile</h2>
        </div>
    )
}

export default Logo
