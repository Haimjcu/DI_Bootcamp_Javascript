const initialState = {
    currentIndex: -1,
    list: []
}

let listLength =0;
let newList=[];
let newTransaction = {};

export const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        case 'INSERT':
            console.log('insetr');
            listLength++;
            newTransaction = {
                index: listLength,
                bAccountNo: action.payload.bAccountNo.value,
                FSC: action.payload.FSC.value,
                bName: action.payload.bName.value,
                amount: action.payload.amount.value
            };
            newList=state.list;
            newList.push(newTransaction);           
            localStorage.setItem('transactions', JSON.stringify(newList));
            return {...state, currentIndex: 0, list: newList}
        case 'UPDATE':
            newTransaction = {
                index: state.currentIndex,
                bAccountNo: action.payload.bAccountNo.value,
                FSC: action.payload.FSC.value,
                bName: action.payload.bName.value,
                amount: action.payload.amount.value
            };
            newList = state.list.filter( x => x.index!==state.currentIndex);
            newList.push(newTransaction);           
            localStorage.setItem('transactions', JSON.stringify(newList));
            return {...state, currentIndex: 0, list: newList}
        case 'DELETE':
            newList = state.list.filter( x => x.index!==action.payload);
            return {...state, currentIndex: 0, list: newList}
        case 'UPDATE-INDEX':
            return {...state, currentIndex: action.payload }
        default:
            return {...state}
    }
}