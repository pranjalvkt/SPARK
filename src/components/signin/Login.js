import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Signimg from '../signup/Signimg'
import './login.css';
import { setUserId } from '../../useSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputval, setInputval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);

    const getdata = (e) => {

        const { value, name } = e.target;

        setInputval(() => {
            return {
                ...inputval,
                [name]: value
            }
        })

    }

    const addData = async (e) => {
        e.preventDefault();

        const { email, password } = inputval;
        if (email === "") {
            alert('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            alert('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            alert('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            alert('password length greater five', {
                position: "top-center",
            });
        } else {
            try {
                console.log("User can be logged in here!!");
                console.log(inputval);
                dispatch(setUserId({id: inputval.email}))
                // add logic for authentication, but redirecting directly without auth
                navigate('/folders')

            } catch (err) {
                console.log(err.message);
            }
        }

    }

    return (
        <>
            
            <div className="container loginContainer">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-5" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign in</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "#4B6587" }} type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                    <Signimg></Signimg>
                </section>

            </div>

        </>
    )
}

export default Login