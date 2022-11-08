import React from 'react';
import useTitle from '../../extra/useTitle';

const AddService = () => {
    useTitle('AddService')
    return (
        <div>
            <input type="text" />
            <h1>add</h1>
        </div>
    );
};

export default AddService;