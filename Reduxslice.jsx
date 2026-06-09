import { createSlice } from "@reduxjs/toolkit";

const initialState= {
 users:[]
};

const Reduxslice=createSlice({
    name:"users",
    initialState,
    reducers:{
        setusers:(state,action)=>{
            state.users=[...state.users,action.payload];
        },
        deleteuser:(state,action)=>{
            state.users=state.users.filter(
                (user,index)=>index !== action.payload
        );},

        },
    },
);
export const{setusers,deleteuser}=Reduxslice.actions;
export default Reduxslice.reducer;