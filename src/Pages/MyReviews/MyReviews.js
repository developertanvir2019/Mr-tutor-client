import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../extra/AuthProvider';
import useTitle from '../../extra/useTitle';
const MyReviews = () => {
    useTitle('MyReview')
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
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
                            </tr>
                        )
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default MyReviews;