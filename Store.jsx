import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slice/Reduxslice";

const store = configureStore({
    reducer:{
        userinfo:UserReducer,
    },

});
export default store;
