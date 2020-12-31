export const setTextFilter=(text='')=>({
    type: 'SET_TEXT',
    text
    }
);

export const sortbyAmount=()=>({
    type: 'SORT_BY_AMOUNT'
});

export const sortbyDate=()=>({
    type: 'SORT_BY_DATE'
});

export const setStartDate=(date)=>(
{
    type: 'SET_START_DATE',
    date
});

export const setEndDate=(date)=>(
{
    type: 'SET_END_DATE',
    date
});