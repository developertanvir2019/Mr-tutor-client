import React from 'react';
import { Accordion } from 'react-bootstrap';
import useTitle from '../../extra/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container'>
            <h1 className='my-4 text-primary mb-5'>Some Question</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between SQL and NoSQL?</Accordion.Header>
                    <Accordion.Body>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. What is JWT, and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        JSON Web Token (JWT) is an open standard  that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.We can provide data in a valid user by JWT token..
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What is the difference between javascript and NodeJS?</Accordion.Header>
                    <Accordion.Body>
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                    <Accordion.Body>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;