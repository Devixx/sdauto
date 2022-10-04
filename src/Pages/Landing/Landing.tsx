import React from 'react'
import { Divider, Layout } from '../../Components'
import { Descriptions, Products } from '../../Shells'
import Banner from '../../Shells/Banner/Banner'

type Props = {}

export default function Landing({ }: Props) {
    return (
        <div>
            <Layout>
                <Banner />
                <Divider />
                {/* <div>Landing</div> */}
                <Descriptions />
                <Divider />
                <Products />
            </Layout>
        </div>
    )
}