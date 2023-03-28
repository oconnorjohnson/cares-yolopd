import { Container, Row, Button, Link, Text, Navbar } from '@nextui-org/react'
import { UseSession, SignIn, SignOut } from 'next-auth/react'
import LogButton from './login-btn'

const Nav = () => {
    return(
        <Container> 
            <LogButton />
        </Container>
    )
}

export default Nav;