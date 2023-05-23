import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

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

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;

        if (email === "") {
            toast.error("Nhập Email", {
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
            toast.error("Nhập Email hợp lệ!", {
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
            toast.error("Nhập mật khẩu", {
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
          toast.error("Độ dài mật khẩu lớn hơn 5 ký tự!", {
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

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                  toast.error("Tài khoản không hợp lệ. Vui lòng đăng ký.", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                } else {
                      toast.success("Đăng nhập thành công!", {
                        position: "top-center",
                        autoClose: 1200,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

               history(  "/home"  )  
               window.location.reload(false);
                }
            }
        }

    }

 
  
    return (
      <>
        <h3 className="title">Đăng nhập</h3>
        <Form>
          <Form.Group className="field_container" controlId="formBasicEmail">
            <Form.Control
              className="otherField"
              type="email"
              name="email"
              onChange={getdata}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="field_container" controlId="formBasicPassword">
            <Form.Control
              type="password"
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
            Đăng nhập
          </Button>
        </Form>
        <p>Bạn chưa có tài khoản vui lòng đăng ký!</p>

        <ToastContainer />
      </>
    );
}

export default Login