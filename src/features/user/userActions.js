import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        'https://reqres.in/api/login',
        { email, password },
        config
      )

      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken)

      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserDetails = createAsyncThunk(
  '/users',
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState()
      
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }

      const { data } = await axios.get(`https://reqres.in/api/users?page=2&per_page=6`, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)