import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../Redux/tablesRedux';
import TablesCard from '../features/TablesCard/TablesCard';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Home = () => {

    const tables = useSelector(getAllTables);

    return (
        <div>
            <Row className='my-3'>
                <Col>
                    <h1>All tables</h1>
                </Col>
            </Row>
            {tables.map((table, index) => (
                <TablesCard 
                key={index}
                id={table.id}
                numer={table.numer} 
                status={table.status}
                />          
            ))}
            <Col className='d-flex flex-row-reverse'>
                <Link to={"/addTable"}>
                    <Button variant="primary">Add Table</Button>
                </Link>
            </Col>
        </div>
    )
}

export default Home;