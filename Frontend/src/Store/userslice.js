import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserdetails: (state,action)=>{
      state.user=action.payload;
    }
  }
})

export const {setuserdetails} = userslice.actions

export default userslice.reducer