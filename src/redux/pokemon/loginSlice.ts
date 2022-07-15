import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers:{
    logIn(state, action){
      const stateLoggedIn = {...state, user: action.payload}
      return stateLoggedIn
    },
    logOut(){
      return {user: null}
    }
  }
}
)


export default loginSlice

export const {logIn, logOut} = loginSlice.actions