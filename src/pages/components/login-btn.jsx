import { useSession, signIn, signOut } from "next-auth/react"
import { Button, Container, Row } from "@nextui-org/react"

const LoginLogoutButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <Container justify="center" align="center">
                <Button auto onClick={() => signOut()}>
                    Log Out 
                </Button>
            </Container>
        )
    }

    return (
        <Container justify="center" align="center">
            <Button auto onClick={() => signIn()}>
                Log In
            </Button>
        </Container>
    )
}

export default LoginLogoutButton;


// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }