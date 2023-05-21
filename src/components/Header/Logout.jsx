import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";


import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error('Nhập họ và tên',{
              position: "top-center",
autoClose: 1200,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
            });
        } else if (email === "") {
             toast.error('Nhập vào Email!',{
              position: "top-center",
autoClose: 1200,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
            });
        } else if (!email.includes("@")) {
             toast.error('Email không đúng!',{
              position: "top-center",
autoClose: 1200,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
            });
        } else if (date === "") {
             toast.error('Nhập vào ngày, tháng, năm, sinh!',{
              position: "top-center",
autoClose: 1200,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
            });
        } else if (password === "") {
             toast.error('Nhập vào mật khẩu',{
              position: "top-center",
autoClose: 1200,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
            });
        } else if (password.length < 5) {
             toast.error('Mật khẩu dài hơn 5 ký tự!',{
              position: "top-center",
autoClose: 1200,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
            });
        } else {
          toast.success("Đăng ký thành công, vui lòng đăng nhập!", {
            position: "top-center",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
            history("/inout")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }
  
  
    return (
      <>
        <h3 className="title">Đăng ký</h3>
        <Form>
          <Form.Group className="field_container" controlId="formBasicEmail">
            <Form.Control
              className="otherField"
              type="text"
              name="name"
              onChange={getdata}
              placeholder="Họ và tên"
            />
          </Form.Group>
          <Form.Group className="field_container" controlId="formBasicEmail">
            <Form.Control
              className="otherField"
              type="email"
              name="email"
              onChange={getdata}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="field_container" controlId="formBasicEmail">
            <Form.Control
              className="otherField"
              onChange={getdata}
              name="date"
              type="date"
            />
          </Form.Group>

          <Form.Group className="field_container" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="otherField"
              name="password"
              onChange={getdata}
              placeholder="Mật khẩu"
            />
          </Form.Group>
        
            <Button
              variant="primary"
              className="login"
              onClick={addData}
              type="submit"
            >
              Đăng ký
            </Button>
        
        </Form>
        <p>Bạn đã có tài khoản vui lòng đăng nhập.</p>

        <ToastContainer />
      </>
    );
}

export default Home