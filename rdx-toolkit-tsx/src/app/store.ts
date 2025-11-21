import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';
import loginReducer from '../features/login/loginSlice'
// import logger from 'redux-logger'
const store= configureStore({
    reducer:{
        cake:cakeReducer,
        icecream: icecreamReducer,
        user:userReducer,
        login:loginReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
export type Rootstate= ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch