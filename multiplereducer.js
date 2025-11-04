const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function cakeOrdered() {
    return {
        type: 'CAKE_ORDERED',
        payload: 1
    }
}
function cakeRestocked(qty = 1) {
    return {
        type: 'CAKE_RESTOCKED',
        payload: qty
    }
}
function iceCreamOrder() {
    return {
        type: 'ICECREAM_ORDERED',
        payload: 1
    }
}
function iceCreamRestocked(qty = 1) {
    return {
        type: 'ICECREAM_RESTOCKED',
        payload: qty
    }
}

const intialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const CakeReducer = (state = intialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }

}

const IceCreamReducer = (state = intialState, action) => {
    switch (action.type) {

        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }

}
const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})

const store = createStore(rootReducer)
console.log('IntialState', store.getState());
const unsubsribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeOrdered());
store.dispatch(cakeRestocked(3));
store.dispatch(iceCreamOrder());
store.dispatch(iceCreamOrder());
store.dispatch(iceCreamOrder());
store.dispatch(iceCreamRestocked(3));


unsubsribe();