const redux= require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED='CAKE_ORDERED';

function cakeOrdered() {
    return {
        type: 'CAKE_ORDERED',
        quantity: 1
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

unsubsribe();