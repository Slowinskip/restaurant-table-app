//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_BOOKS = createActionName('UPDATE_BOOKS')

// action creators
export const updateBooks = payload => ({ type: UPDATE_BOOKS, payload })
export const fetchBooks = () => {
  return (dispatch) =>{ 
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(books => dispatch(updateBooks(books)));
  }
}


const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;