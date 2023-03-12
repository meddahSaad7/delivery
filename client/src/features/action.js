import {createSlice} from '@reduxjs/toolkit';

export const userLoading=createSlice({
    name:'userLoad',
    initialState:{
        value:false
    },
    reducers:{
        loading:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {loading}=userLoading.actions;
export default userLoading.reducer