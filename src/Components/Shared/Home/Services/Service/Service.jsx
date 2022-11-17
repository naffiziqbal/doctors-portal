import React from 'react';

const Service = ({service}) => {
    const { id, title,description, img} = service
    
    return (
        <div className='flex flex-col justify-center items-center line leading-10 shadow-lg rounded-lg'>
            <img className='w-fit' src={img} alt="service-img" />
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p>{description?.slice(0,50)}</p>
        </div>
    );
};

export default Service;
