import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Allusers from '../Components/AllUsers/Allusers';
import Dashboard from '../Components/Dashboard/Dashboard';
import MyAppointment from '../Components/Dashboard/MyAppointment';
import Appointment from '../Components/Pages/Appointment/Appointment';
import Errors from '../Components/Pages/Error/Errors';
import Login from '../Components/Pages/UserDetails/Login/Login';
import Signup from '../Components/Pages/UserDetails/SignUp/Signup';
import Home from '../Components/Shared/Home/Home';
import DashBoardLayout from '../Layout/DashBoardLayout';
import Main from '../Layout/Main';
import AdminRoutes from './AdminRoutes/AdminRoutes';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

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
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes>
            <DashBoardLayout><Dashboard /></DashBoardLayout>
        </PrivateRoutes>,
        children: [
            { path: '/dashboard', element: <Dashboard /> },
            {
                path: "/dashboard/myappointment",
                element: <MyAppointment />
            },
            {
                path: 'allusers',
                element: <AdminRoutes><Allusers /></AdminRoutes>
            }
        ]
    },
])

