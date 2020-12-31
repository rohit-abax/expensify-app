import moment from 'moment';

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month'),
};

export const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT':
			return { ...state, ...action };
		case 'SORT_BY_AMOUNT':
			console.log('sorting by amount');
			return { ...state, sortBy: 'amount' };
		case 'SORT_BY_DATE':
			console.log('sorting by date');
			return { ...state, sortBy: 'date' };
		case 'SET_START_DATE':
			return { ...state, startDate: action.date };
		case 'SET_END_DATE':
			return { ...state, endDate: action.date };
		default:
			return state;
	}
};

export default filtersReducer;
