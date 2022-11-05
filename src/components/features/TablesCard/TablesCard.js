import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const TablesCard = ({status, id}) => {

    return (
        <Row className='mb-4'>
            <Col className="col-2 d-flex align-items-end justify-content-between">
                <h3>Tables {id}</h3>
            </Col>
            <Col className="col-4">
                <p><b>Status:</b> {status}</p>
            </Col>
            <Col className="col-6 d-flex justify-content-end">
                <Link to={"/tables/" + id}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Col>
        </Row>
    )
}

export default TablesCard;