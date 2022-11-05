//selectors
export const getAllStatus = ({ status }) => status;
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES_STATUS = createActionName('UPDATE_TABLES_STATUS')

// action creators
export const updateTablesStatus = payload => ({ type: UPDATE_TABLES_STATUS, payload })
export const fetchTablesStatus = () => {
  return (dispatch) =>{ 
    fetch('http://localhost:3131/api/status')
      .then(res => res.json())
      .then(tablesStatus => dispatch(updateTablesStatus(tablesStatus)));
  }
}


const tablesStatusReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES_STATUS:
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesStatusReducer;