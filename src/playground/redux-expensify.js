import {createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';

//Action
const removeExpense=({id})=>({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense=(id, updates)=>{
    console.log('inside editExpense method');
    console.log(id,updates);
    return {
    type: 'EDIT_EXPENSE',
    id,
    updates
}};

const addExpense=(
    {
        description='', 
        note='', 
        amount=0,
        createdAt=0 
    } ={}
)=>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const setTextFilter=(text='')=>({
    type: 'SET_TEXT',
    text
    }
);

const sortbyAmount=()=>({
    type: 'SORT_BY_AMOUNT'
});

const sortbyDate=()=>({
    type: 'SORT_BY_DATE'
});

const setStartDate=(date)=>(
{
    type: 'SET_START_DATE',
    date
});

const setEndDate=(date)=>(
{
    type: 'SET_END_DATE',
    date
});

const expensesReducerDefaultState=[];

//Reducer
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(x=>x.id!=action.id);
            //EDIT_EXPENSE
        case 'EDIT_EXPENSE':
            console.log('inside reducer, edit case',action.id,action.updates);
            return state.map((expense)=>{
                if(expense.id===action.id)
                {
                    const returnObj={
                        ...expense,
                        ...action.updates
                    }
                    console.log('final return object',returnObj);
                    return returnObj;
                }
                else{
                    console.log('not updated',expense.id,action.id);
                    return expense;
                }
            }

            );
        
        default:
            return state;
    }
}

const filtersReducerDefaultState={
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined    
}

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT':
            return{...state,...action};
        case 'SORT_BY_AMOUNT':
            return{...state, sortBy: 'amount'} ;
        case 'SORT_BY_DATE':
            return{...state, sortBy: 'date'} ;   
        case 'SET_START_DATE':
            return{...state, startDate: action.date}  
        case 'SET_END_DATE':
        return{...state, endDate: action.date}   
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses=(expenses,{text, sortBy, startDate, endDate})=>{
    //console.log(text);
    return expenses.filter((expense)=>{
        // console.log('Expense desc is', expense.description.toLowerCase().includes(text.toLowerCase()));
        // console.log('text is', text);
        const startDateMatch=   typeof(startDate) !=='number' || expense.createdAt>=startDate;
        const endDateMatch  =   typeof(endDate)   !=='number' || expense.createdAt<=endDate;
        const textMatch =       text===undefined||expense.description===undefined||expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        switch(sortBy){
            case 'amount':
                return a.amount<b.amount? 1: -1;
            case 'date':
                return a.createdAt<b.createdAt? 1: -1;
            default:
                return -1;
        }
        
    });
};

const store=createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
    
);

const unsubscribe=store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne=store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}));
const expenseTwo=store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1000}));

// // console.log(expenseOne.expense.id);

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{    
//     amount: 500,
//     description: 'new description'    
// }));

//store.dispatch(setTextFilter());
// store.dispatch(setTextFilter());

  store.dispatch(sortbyAmount()); //change sort by to 'amount'
 //store.dispatch(sortbyDate()); //change sort by to 'date'

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate()); //undefined

// store.dispatch(setEndDate(500));
// store.dispatch(setEndDate()); // undefined

const demoState={
    expenses:[
        {    
            id:'hdkjhdqw',
            description: 'January Rent',
            note:'This was the final payment for that address.',
            amount: 54500,
            createdAt:0
        }
    ],
    filters:{
        text:'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user={
    name: 'Rohit',
    age: 36
}
// console.log({
//     ...user,
//     location:'Pune',
//     Email: 'rohitjain841@gmail.com',
//     age: 26
// });


