import { Container,Row,Col } from "react-bootstrap";

function Experience(){
    return(
        <Container id="experience">
            <div className="py-5">
                <h2 className="text-center text-dark text-bold">Experience</h2>
            </div>
            <div style={{
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Row className="p-3">
                    <Col>
                        <h3>
                            DevOps Engineer
                        </h3>
                        <p>Company Name</p>
                    </Col>
                    <Col>
                        <h3>
                            Roles and Reponsibilities
                        </h3>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                    </Col>
                </Row>

{/* Experience 2 */}

                <Row className="p-3">
                    <Col>
                        <h3>
                            DevOps Engineer
                        </h3>
                        <p>Company Name</p>
                    </Col>
                    <Col>
                        <h3>
                            Roles and Reponsibilities
                        </h3>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                        <li className="ml-2">List 1011</li>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Experience