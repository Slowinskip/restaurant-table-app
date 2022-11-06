import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap"
import { getAllStatus } from '../../../Redux/tableStatusRedux';
import { useSelector } from "react-redux";
import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';

const TablesForm = ({ action, actionText, ...props }) => {

    const id = props.id



    const [status, setStatus] = useState(props.status || '');
    const [people, setPeople] = useState(props.people || '');
    const [maxPeople, setMaxPeople] = useState(props.maxPeople || '');
    const [bill, setBill] = useState(props.bill || 0);    
    const [statusError, setStatusError] = useState(false);
    const [numer, setNumer] = useState(props.numer || '')

    const getStatus = useSelector(getAllStatus);

    let maxValue = 10;

    if (people > maxPeople){
        setMaxPeople(people);
    } if (people > maxValue){
        setPeople(maxValue)
    }
    if (maxPeople > maxValue){
        setMaxPeople(maxValue)
    } if (maxPeople < 1){
        setMaxPeople(1)
    } if (people < 0){
        setPeople(0)
    }
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = () => {
        console.log('+');
        if(status !== "null"){
        setStatusError(!status);
        }
        if(maxPeople){
            action({ id, people, maxPeople, bill, status, numer })
        }
        
    }


    return (
        <Form onSubmit={validate(handleSubmit)}>
            <h1>{props.title}</h1>
            <Form.Group as={Row} className={clsx(id === undefined ? 'mb-3' : 'd-none')}>
                <Form.Label column sm="1"><b>Numer: </b></Form.Label>
                    <Col sm="2">
                        <Form.Control
                        {...register("numer", { required: true})}
                        type="number"
                        value={numer}
                        onChange={e => setNumer(e.target.value)}

                        >
                        </Form.Control>
                        {errors.numer && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                    </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1"><b>Status: </b></Form.Label>
                    <Col sm="4">
                        <Form.Control
                        {...register("status", { required: true})}
                        as="select"
                        value={status ? status : "null"}
                        onChange={e => setStatus(e.target.value)}
                        >
                            <option disabled value="null">Select status...</option>
                            {getStatus.map((status, index) => <option key={index} value={status}>{status}</option> )}
                        </Form.Control>
                    </Col>
                    {statusError && <small className="d-block form-text text-danger mt-2">Please choose status</small>}
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1"><b>People: </b></Form.Label>
                    <Col sm="2">
                        <Form.Control
                        type="number"
                        value={people}
                        onChange={e => setPeople(e.target.value)}

                        >
                        </Form.Control>
                    </Col>
                    /
                    <Col sm="2">
                        <Form.Control
                        {...register("maxPeople", { required: true})}
                        type="number"
                        value={maxPeople}

                        onChange={e => setMaxPeople(e.target.value)}
                        >
                        </Form.Control>
                        {errors.maxPeople && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                    </Col>
                </Form.Group>
            <Form.Group as={Row} className={clsx(status !== "Cleaning" && status !== "Free" ? 'mb-3' : 'd-none')}>
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