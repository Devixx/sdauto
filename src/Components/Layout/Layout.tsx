import React from 'react'
import { Header, Footer } from '../../Shells'
import Container from '../../Shells/Container/Container'
import Title from '../../Shells/Title/Title'

interface Props { children?: any }

export default function Layout({ children }: Props): any {
	return (
		<div>
			<Header />
			<Title title='Dashboard' />
			<Container >
				{children}
			</Container>
			{/* <Socials /> */}
			<Footer />
		</div>
	)
}
