import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../Redux/tablesRedux';
import TablesCard from '../features/TablesCard/TablesCard';


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
                status={table.status}
                />
            ))}
        </div>
    )
}

export default Home;