import React, { FC } from 'react'
import { BannerImg } from '../../assets'

const Banner: FC = () => {
    return (
        <div>
            <img src={BannerImg} alt="Banner" />
        </div>
    )
}

export default Banner
