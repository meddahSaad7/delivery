import {createSlice} from '@reduxjs/toolkit';

export const defaultComp=createSlice({
    name:'defaultComponent',
    initialState:{
        value:'AddProduct'
    },
    reducers:{
        myComp:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {myComp}=defaultComp.actions;
export default defaultComp.reducer