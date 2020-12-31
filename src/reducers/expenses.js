const expensesReducerDefaultState = [];

//Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			//return state.concat(action.expense);
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter((x) => x.id != action.id);
		//EDIT_EXPENSE
		case 'EDIT_EXPENSE':
			console.log('inside reducer, edit case', action.id, action.updates);
			return state.map((expense) => {
				if (expense.id === action.id) {
					const returnObj = {
						...expense,
						...action.updates,
					};
					console.log('final return object', returnObj);
					return returnObj;
				} else {
					console.log('not updated', expense.id, action.id);
					return expense;
				}
			});

		default:
			return state;
	}
};

export default expensesReducer;
