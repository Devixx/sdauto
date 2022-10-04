import React from 'react'
import { Header, Socials, Footer } from '../../Shells'
import Container from '../../Shells/Container/Container'
import Title from '../../Shells/Title/Title'


type Props = { children?: any }

export default function Layout({ children }: Props) {
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