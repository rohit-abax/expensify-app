import {createStore} from 'redux';

const incrementCount=({incrementBy=50}={})=>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=5}={})=>({
    type:'DECREMENT',
    decrementBy
});

const setCount=({count})=>({
    type:'SET',
    count
})

const resetCount=()=>({
    type:'RESET'
});

//Reducers
//1. 

const countReducer=(state={count:0},action) => {
    switch(action.type){

        case 'INCREMENT': 
            return {count:state.count+action.incrementBy};        
        case 'DECREMENT': 
            
            return {count:state.count-action.decrementBy};
        case 'RESET'    : return {count:0};
        case 'SET'    : return {count:action.count};
        default: return state;
    }    
}

const store=createStore(countReducer);


const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});



// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// });

store.dispatch(incrementCount({
    incrementBy: 5
}))


store.dispatch(incrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy:50
// });

store.dispatch(decrementCount({decrementBy: 10}));

//unsubscribe();

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({count: 100}));

//console.log(store.getState());