import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ModalDelete from '../ModalDelete/ModalDelete';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTableRequest } from '../../../Redux/tablesRedux';

const TablesCard = ({status, id, numer}) => {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () =>  setShowModal(true); 

    const handleRemove = e => {  
        e.preventDefault();
        dispatch(deleteTableRequest( id ));
        handleClose();
      };


    if(showModal) return (
        <ModalDelete showModal={showModal} handleClose={handleClose} handleRemove={handleRemove} />
      );
    return (
        <Row className='mb-4'>
            <Col className="col-2 d-flex align-items-end justify-content-between">
                <h3>Tables {numer}</h3>
            </Col>
            <Col className="col-4">
                <p><b>Status:</b> {status}</p>
            </Col>
            <Col className="col-6 d-flex justify-content-end">
                <Link  to={"/tables/" + id}>
                    <Button variant="primary">Show more</Button>
                </Link>
                <Button className='mx-2' onClick={handleShow} variant="outline-danger" size="sm">Delete</Button>
            </Col>
        </Row>
    )
}

export default TablesCard;