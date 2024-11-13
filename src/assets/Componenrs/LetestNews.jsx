import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LetestNews = () => {
    return (
        <>
            <div className='flex items-center gap-3 bg-base-200'>
                <p className='btn btn-success'>Letest News:</p>
                <Marquee pauseOnHover={true} className='space-x-3'>
                    <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, natus.</Link>

                    <Link to='/news'>ipsum dolor sit amet, consectetur adipisicing elit. At, natus.</Link>
                </Marquee>
            </div>
        </>
    );
};

export default LetestNews;