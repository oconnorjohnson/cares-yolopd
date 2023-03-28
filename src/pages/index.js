import { Container, Spacer, Row, Button, Text, Link } from '@nextui-org/react';
import Nav from './components/nav';

const Header = () => {
  return (
    <Container justify="center" align="center"> 
      <Row justify="center" align="center">
        <Text weight="black" size="100pt" color="#ffffff" h1>Bringing power to the people.</Text>
      </Row>
      <Spacer y={2} />
      <Row justify="start" align="center">
        <Text weight="med" size="25pt" color="#ffffff" h1>CARES is a non-profit run by members of the Yolo County Public Defender's office.</Text>
      </Row>
      <Spacer y={.25} />
      <Row justify="start" align="center">
        <Text weight="med" size="25pt" color="#ffffff" h1>Our community service starts with our attorneys practicing indigent criminal defense in the courtroom.</Text>
      </Row>
      <Spacer y={.25} />
      <Row justify="start" align="center">
        <Text weight="med" size="25pt" color="#ffffff" h1>CARES extends this service to the streets, bringing food, clothing and shelter to the unhoused individuals in Yolo County.</Text>
      </Row>
    </Container>
  )
}



const LandingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundSize: 'cover',
        // backgroundImage: '../../public/images/landingpage.svg'
        backgroundPosition: 'center'
      }}
    >

      <Nav />
      <Spacer y={2} />
      <Header />
      {/* <Header />
      <Body />
      <Footer /> */}
     
    </div>
  )
}

export default LandingPage;