/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/ConfigureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortbyAmount, sortbyDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
//description: 'Rent', amount: 100, createdAt: -1000
const expense1 = store.dispatch(
    addExpense({
        description: 'Water Bill',
        note: 'This is a test expense',
        amount: 200,
        createdAt: 1606804200000 ,
    })
);
store.dispatch(
    addExpense({
        description: 'Gas Bill',
        note: 'This is another test expense',
        amount: 50000,
        createdAt: 1607063400000  ,
    })
);

store.dispatch(
    addExpense({
        description: 'Rent',
        note: 'This is another test expense',
        amount: 5000,
        createdAt: 1609050600000  ,
    })
);

//console.log('removing expense1',expense1);
//store.dispatch(removeExpense(expense1.expense.id));

// store.dispatch(setTextFilter('water'));
//addExpense: water bill
// store.dispatch(sortbyAmount());
//store.dispatch(sortbyDate());

//console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
