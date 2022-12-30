import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
    user:undefined
}

const shouldLoginSlice = createSlice({
    name:'shouldLogin',
    initialState,
    reducers:{
        success: (state, action) => {
            state.value = true
            state.user = action.payload
          },
        unsuccess:(state) => {
            state.value = false
            state.user = undefined
          },
    }
})

export const {success,unsuccess}=shouldLoginSlice.actions

export default shouldLoginSlice.reducer