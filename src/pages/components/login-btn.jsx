import { useSession, signIn, signOut } from "next-auth/react"
import { Button, Container, Row } from "@nextui-org/react"

const LoginLogoutButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <Container justify="center" align="center">
                <Button bordered color="primary" auto onClick={() => signOut()}>
                    Log Out 
                </Button>
            </Container>
        )
    }

    return (
        <Container justify="center" align="center">
            <Button bordered color="primary" auto onClick={() => signIn()}>
                Log In
            </Button>
        </Container>
    )
}

export default LoginLogoutButton;


