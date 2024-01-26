import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


interface UserState {
  user: { username: string };
  theme: string;
}

const themes={
  cupcake: 'light',
  dark: 'dark'
}

    const getLocalStorageTheme=()=>{
      const theme =  localStorage.getItem('theme') || themes.cupcake
      document.documentElement.setAttribute('data-theme', theme)
      return theme
    }


const defaultState: UserState ={
  user: {username: 'joseph'},
  theme: getLocalStorageTheme()
}
const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    loginUser: (state, action)=>{
        console.log(action.payload)
    },
    logoutUser: (state) =>{
      state.user.username = '';
      localStorage.removeItem('user')
      toast.success('Logged out successfully')
    },
    changeTheme:(state)=>{
      state.theme = state.theme  === themes.cupcake ? themes.dark : themes.cupcake
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    }
  },

})


export const {loginUser,logoutUser,changeTheme} = userSlice.actions
export default userSlice.reducer