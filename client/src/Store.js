import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/user'
import userLoading from './features/action';
import defaultComponent from './features/defaultComp'
export const store = configureStore({
    reducer:{
        user:userReducer,
        userLoad:userLoading,
        defaultComponent:defaultComponent
    }
})