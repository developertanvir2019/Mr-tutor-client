import React from 'react';
import { Card, CardGroup, ProgressBar } from 'react-bootstrap';
import('./ExtraSection.css')

const ExtraSection = () => {
    return (
        <div>
            <div className='my-5 container'>
                <h1 className='text-info my-3'>Teaching Process...</h1>
                <CardGroup>
                    <Card className='mx-3' >
                        <Card.Img className='card-img' variant="top" src="https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2017/03/analysis.jpg" />
                        <Card.Body>
                            <Card.Title>Student Analysis</Card.Title>
                            <Card.Text>
                                First step is cheek a student.Then divide other batch.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mx-3' >
                        <Card.Img className='card-img' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBDXd5CyegF4TQV9c2gjbyInByLiqW04rGHCf6JeO-FXCwEBKJDysRhY5wS9ROpiqaxw&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Every Day class Open</Card.Title>
                            <Card.Text>
                                Every day class with seriously.Student can easy to teach.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className='mx-3' >
                        <Card.Img className='card-img' variant="top" src="https://miro.medium.com/max/752/1*zCqfkQXqQ5X1FrIaXBrutA.jpeg" />
                        <Card.Body>
                            <Card.Title>Daily Note Provide</Card.Title>
                            <Card.Text>
                                After finishig daily class,Student got note for her future .
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>


            <div className='container d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='mt-5 mb-5'>Success Review of <span className='text-info'>scientific</span> Subject.</h1>
                    <ProgressBar label='Mathematics 98%' className='my-4 w-100 h-50 fw-bold fs-5' animated variant="success" now={98} />
                    <ProgressBar label='Physics 95%' className='my-4 w-100 h-50  fw-bold fs-5' animated variant="info" now={95} />
                    <ProgressBar label='Chemistry 90%' className='my-4 w-100 h-50  fw-bold fs-5' animated variant="warning" now={90} />
                    <ProgressBar label='Biology 80%' className='my-4 w-100 h-50  fw-bold fs-5' animated variant="danger" now={80} />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;