import { useDispatch } from "react-redux";
import TablesForm from "../TablesForm/TablesForm";
import { useNavigate } from "react-router-dom";
import { addTableRequest } from "../../../Redux/tablesRedux";

const AddTable = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleSubmit = table => {
        dispatch(addTableRequest(table));
        navigate('/')
    }

    return (
        <TablesForm 
        action={handleSubmit}
        actionText={'Add Table'}
        title='Add Table'
        />
    )
}

export default AddTable;