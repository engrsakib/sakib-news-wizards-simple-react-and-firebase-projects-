import React from 'react';
import { Link } from 'react-router-dom';

const Fourzeror = () => {
    const img =
      "https://i.ibb.co.com/DR7nzYg/error-404-concept-illustration-114360-1811.jpg";
    return (
        <div>
            <img to='/' className='w-10/12 h-auto mx-auto' src={img} alt="404 pages Image" />
            <Link className='btn btn-warning btn-block text-white'>Go Back</Link>
        </div>
    );
};

export default Fourzeror;