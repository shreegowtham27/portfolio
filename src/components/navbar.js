import {Navbar,Nav,Container} from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Shree Gowtham</Navbar.Brand>
                <Nav className="float-right">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;