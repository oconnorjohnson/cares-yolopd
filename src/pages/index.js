import { Container, Spacer, Row, Button, Text, Link } from '@nextui-org/react';
import Nav from './components/nav';

const TestText = () => {
  return (
    <Text h1>
      Hello World
    </Text>
  )
}

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Spacer y={2} />
      <TestText /> 
      {/* <Header />
      <Body />
      <Footer /> */}
    </>
  )
}

export default LandingPage;