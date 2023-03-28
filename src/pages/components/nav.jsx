import { Container, Spacer, Row, Button, Link, Text, Navbar } from '@nextui-org/react'
import { UseSession, SignIn, SignOut } from 'next-auth/react'
import LogButton from './login-btn'
import Layout from './nav-components/Layout'

const Nav = () => {
    return(
        <Navbar isBordered variant="floating" maxWidth="fluid"> 
            <Navbar.Brand>
                <Spacer y={0.5} />
                <Link href="">
                    <Text weight="bold" size="$3xl" color="$blue800">
                        CARES 
                    </Text>
                    <Spacer x={0.25} /> 
                    {/* <Text weight="med" color="$blue600">
                        by Yolo County Public Defense
                    </Text> */}
                </Link>
            </Navbar.Brand>
            <Navbar.Content >
                <Navbar.Link href="#">About</Navbar.Link>
                <Spacer y={1} />
                <Navbar.Link href="#">Donate</Navbar.Link>
                {/* <Navbar.Link href="#">Donate</Navbar.Link>
                <Navbar.Link href="#">Opportunities</Navbar.Link>
                <Navbar.Link href="#">Community</Navbar.Link> */}
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Container center="end" align="end">
                        <LogButton />
                    </Container>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}

export default Nav;