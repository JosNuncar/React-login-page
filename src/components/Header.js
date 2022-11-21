import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUserDetails } from '../features/user/userActions'
import { logout } from '../features/user/userSlice'

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    }
  }, [userToken, dispatch])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userInfo ? `Logged in as Admin-Technical Test` : "You're not logged in"}
          </Typography>
          <NavLink className='button' to='/'>Home</NavLink>
          <NavLink className='button' to='/users'>Users</NavLink>
          {userInfo ? (
            <button className='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header