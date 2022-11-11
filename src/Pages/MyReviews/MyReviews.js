import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../extra/AuthProvider';
import useTitle from '../../extra/useTitle';
import { useNavigate } from 'react-router-dom';
const MyReviews = () => {
    useTitle('MyReview')
    const [refresh, setrefresh] = useState(true);
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`https://server11-bice.vercel.app/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [refresh])


    const handleDelete = (id) => {
        fetch(`https://server11-bice.vercel.app/myReview/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => {
                setrefresh(!refresh)
                alert('successFully delete')
            })
            .catch(err => console.log(err.message))
    }

    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='container'>

            {review.length > 0 ?
                <h1 className="text-info my-5">My all Reviews</h1>
                :
                <h1 className='mt-5 py-5'>NO Review Available</h1>
            }

            <Table className='my-5' striped>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        review.map(re =>
                            <tr key={re._id}>
                                <td>{re.singleProduct.name}</td>
                                <td>{re.singleProduct.price}</td>
                                <td>{re.review}</td>
                                <td>
                                    <button onClick={() => handleDelete(re._id)} className='btn btn-danger me-2'>Delete</button>
                                    <button onClick={() => handleEdit(re._id)} className='btn btn-warning'>Edit</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default MyReviews;