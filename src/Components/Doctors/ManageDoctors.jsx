import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const {data: doctors =[], isLoading} = useQuery({
        queryKey : ['doctors'],
        queryFn : ()=> fetch(`http://localhost:5000/doctors`, {
            headers : {
                
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
    })
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;
