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
    }

    if(!tableData) return <Navigate to="/" />
    else return (
        <TablesForm 
            action={handleSubmit}
            status={tableData.status}
            id={tableData.id}
            peopleAmount={tableData.peopleAmount}
            maxPeopleAmount={tableData.maxPeopleAmount}
            bill={tableData.bill}
            actionText={"Update"}
        />
    )
}

export default TableEdit;