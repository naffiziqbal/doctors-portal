import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Appointment from '../Components/Pages/Appointment/Appointment';
import Errors from '../Components/Pages/Error/Errors';
import Login from '../Components/Pages/UserDetails/Login/Login';
import Signup from '../Components/Pages/UserDetails/SignUp/Signup';
import Home from '../Components/Shared/Home/Home';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '*',
                element: <Errors />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    }
])

