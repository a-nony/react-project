/*Importing of all the necessary resources into app.js */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import vinicius from './assets/vinicius.jpeg'
import haaland from './assets/haaland.jpeg'
import mosalah from './assets/mosalah.jpeg'
import Card from 'react-bootstrap/Card';

// the funtion 'App' to  be rendered in index to js
const App = () => {
  return (
    <div className='App'>
         <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><h5>React Bootstrap Checkpoint</h5></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      {/*container tag containing all of the cards */}
      <container>
        <div className='card-container' style={{  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
        <Card style={{ width: '18rem', margin: '9px' }}>
        { /*Importing of the images from the assets folder */}
      <Card.Img variant="top" src={vinicius} />
      <Card.Body>
        <Card.Title>Vinicius jr.</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '9px' }}>
    { /*Importing of the images from the assets folder */}
      <Card.Img variant="top" src={haaland} />
      <Card.Body>
        <Card.Title>Erling haaland</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '9px' }}>
       { /*Importing of the images from the assets folder */}
      <Card.Img variant="top" src={mosalah} />
      <Card.Body>
        <Card.Title>Mo salah</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

        </div>
      </container>

     
      {/* <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
    </div>
  )
};

//exporting the 'App function'
export default App;




// function BasicExample() {
//   return (
    
//   );
// }

// export default BasicExample;


// function ColorSchemesExample() {
//   return (
   
//   );
// }

// export default ColorSchemesExample;