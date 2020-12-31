import moment from 'moment';

const getVisibleExpenses=(expenses,{text, sortBy, startDate, endDate})=>{
    //console.log(text);
    return expenses.filter((expense)=>{
        // console.log('Expense desc is', expense.description.toLowerCase().includes(text.toLowerCase()));
        // console.log('text is', text);
        const createdAtMoment=moment(expense.createdAt);
        const startDateMatch=   startDate? startDate.isSameOrBefore(createdAtMoment,'day'): true
        const endDateMatch  =   endDate? endDate.isSameOrAfter(createdAtMoment,'day'): true
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

export default getVisibleExpenses;