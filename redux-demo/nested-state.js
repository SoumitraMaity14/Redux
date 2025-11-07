const redux = require('redux');
const createStore = redux.createStore;
const produce=require('immer').produce;

const intialState = {
    name: "Maity",
    address: {
        street: "865 Rd st",
        city: "Kolkata",
        state: "WB"
    }
}
const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft)=>{
                    draft.address.street=action.payload
                })
            
        default: {
            return state;
        }

    }
}

const store = createStore(reducer);
console.log('Intial state', store.getState());
const unsubsribe=store.subscribe(()=>{
    console.log('updated state', store.getState());
})

store.dispatch(updateStreet('123 New St'));
unsubsribe();