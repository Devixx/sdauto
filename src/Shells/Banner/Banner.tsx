import React from 'react'
import banner from "../../assets/SDbanner.png"

type Props = {}

export default function Banner({ }: Props) {
    return (
        <div>
            <img src={banner} alt="Banner" />
        </div>
    )
}