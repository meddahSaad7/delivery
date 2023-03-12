import {createSlice} from '@reduxjs/toolkit';

export const userSlider=createSlice({
    name:'user',
    initialState:{
        value:localStorage.getItem('user')
    },
    reducers:{
        login:(state,action)=>{
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.value=localStorage.getItem('user')
        }
    }
})
export const {login}=userSlider.actions;
export default userSlider.reducer