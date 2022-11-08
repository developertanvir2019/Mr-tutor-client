import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../extra/useTitle';
import('./Error.css')
const Error = () => {
    useTitle('404')
    return (
        <div className='error d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='big-text text-white'>4<span className='text-danger'>0</span>4</h1>
                <h3 className='text-white my-3'>page is not found</h3>
                <Link to={'/'} className='btn btn-danger'> Go to home</Link>
            </div>
        </div>
    );
};

export default Error;