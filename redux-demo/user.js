const redux = require('redux');
const createStore = redux.createStore;
const axios = require('axios');
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').thunk;

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const intialState ={
    loading:false,
    users:[],
    error:''
}

const fetchUserRequest=()=>{
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUserSuccess=(user)=>{
    return{
        type: FETCH_USERS_SUCCEEDED,
        payload: user
    }
}

const fetchUserFailure=(error)=>{
    return{
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer=(state=intialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCEEDED:
            return{
                ...state,
                loading: false,
                users: action.payload,
            }
        case FETCH_USERS_FAILED:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch (fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            response.data=response.data.map((user)=>user.id);
            dispatch (fetchUserSuccess(response.data));
        })
        .catch((error)=>{
            dispatch(fetchUserFailure(error.message));
        })
    }
}

const store=createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());