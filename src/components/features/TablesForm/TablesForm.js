import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap"
import { getAllStatus } from '../../../Redux/tableStatusRedux';
import { useSelector } from "react-redux";

const TablesForm = ({action, actionText, ...props}) => {

    const id = props.id

    const [status, setStatus] = useState(props.status || '')
    const [peopleAmount, setPeople] = useState(props.peopleAmount || '');
    const [maxPeopleAmount, setMaxPeople] = useState(props.maxPeopleAmount || '');
    const [bill, setBill] = useState(props.bill || 0);

    const getStatus = useSelector(getAllStatus);


    const handleSubmit = () => {
        action({ id, peopleAmount, maxPeopleAmount, bill, status })
    }


    return (
        <Form onSubmit={handleSubmit}>
            <h1>Table {props.id}</h1>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1"><b>Status: </b></Form.Label>
                    <Col sm="4">
                        <Form.Control
                        as="select"
                        value={status ? status : "1"}
                        onChange={e => setStatus(e.target.value)}
                        >
                            <option disabled value="1">Select status...</option>
                            {getStatus.map((status, index) => <option key={index} value={status}>{status}</option> )}
                        </Form.Control>
                    </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1"><b>People: </b></Form.Label>
                    <Col sm="2">
                        <Form.Control
                        type="number"
                        value={peopleAmount}
                        onChange={e => setPeople(e.target.value)}

                        >
                        </Form.Control>
                    </Col>
                    /
                    <Col sm="2">
                        <Form.Control
                        type="number"
                        value={maxPeopleAmount}
                        onChange={e => setMaxPeople(e.target.value)}
                        >
                        </Form.Control>
                    </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1"><b>Bill: </b></Form.Label>
                    <Col sm="2">
                            <Form.Control
                            type="number"
                            value={bill}
                            onChange={e => setBill(e.target.value)}

                            >
                            </Form.Control>
                        </Col>
            </Form.Group>
            <Button className="mt-3" as="input" type="submit" value={actionText} />
        </Form>
    )
}

export default TablesForm;