import React, { FC } from 'react'
import logo from '../../assets/sdlogo.png'

const Logo: FC = () => {
    return (
        <div className="flex items-center gap-2">
            <img
                className="h-8 w-8"
                src={logo}
                alt="Your Company"
            />
            <h2 className='font-bold'>SD automobile</h2>
        </div>
    )
}

export default Logo
