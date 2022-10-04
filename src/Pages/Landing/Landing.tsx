import React from 'react'
import { Divider, Layout } from '../../Components'
import { Descriptions, Products } from '../../Shells'
import Banner from '../../Shells/Banner/Banner'

// interface Props {children: any}

export default function Landing(): any {
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
		</div>)
}
