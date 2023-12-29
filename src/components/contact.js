import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

function Contact (){
    return(
        <div id="contact" style={{
            padding:'30px',
            backgroundColor:'#00F5D4'
        }}>
            <Container>
                <h3 className="text-center py-3">Contact</h3>
            </Container>
            <div style={{
                fontSize:'35px'
            }} className="d-flex align-items-center">
                <a className="mx-3" target="_blank noopener" href="https://instagram.com" ><FaInstagram /></a>
            
                <a className="mx-3" target="_blank noopener" href="https://instagram.com" ><FaFacebook /></a>
            
                <a className="mx-3" target="_blank noopener" href="https://instagram.com" ><FaYoutube /></a>
            </div>
        </div>
    )
}

export default Contact