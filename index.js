const redux= require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED='CAKE_ORDERED';

const CAKE_RESTOCKED='CAKE_RESTOCKED'

function cakeOrdered() {
    return {
        type: 'CAKE_ORDERED',
        payload: 1
    }
}
function cakeRestocked(qty=1){
    return{
        type: 'CAKE_RESTOCKED',
        payload: qty
    }
}

const intialState={
    numOfCakes: 10
}

const reducer=(state=intialState, action)=>{
    switch(action.type){
    case CAKE_ORDERED:
        return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
    case CAKE_RESTOCKED:
        return{
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }
    default:
        return state;
    }
    
}

const store=createStore(reducer)
console.log('IntialState', store.getState());
const unsubsribe=store.subscribe(()=>console.log('Updated State', store.getState()));

store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeRestocked(3));

unsubsribe();