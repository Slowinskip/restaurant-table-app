import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getTableById } from '../../../Redux/tablesRedux';
import { Navigate } from "react-router-dom";
import TablesForm from '../TablesForm/TablesForm';
import { editTableRequest } from '../../../Redux/tablesRedux';

const TableEdit = () => {
    
    const tableId = useParams();
    const tableData = useSelector(stage => getTableById(stage, tableId.id))
    let navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(tableData);

    const handleSubmit = (table) => {
        dispatch(editTableRequest({ ...table }));
        navigate('/');
        console.log(table);
    }

    if(!tableData) return <Navigate to="/" />
    else return (
        <TablesForm 
            action={handleSubmit}
            actionText="Update"
            id={tableData.id}
            status={tableData.status}
            people={tableData.people}
            maxPeople={tableData.maxPeople}
            bill={tableData.bill}
            numer={tableData.numer}
            title={'Table ' + tableData.id}
        />
    )
}

export default TableEdit;