import React from "react";
import img1 from "../Assets/img/logoTransparent.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.module.css";
import img2 from "../Assets/img/eg.svg";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  let gate=useNavigate();
  function x() {
    console.log("dasdas");
  }
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  let validation = Yup.object({
    phone: Yup.string()
      // .matches(phoneRegExp, "رقم الهاتف غير صحيح")
      .required("الهاتف مطلوب"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}/, "Password Must Start With Upper Case")
      .required("password Is Required"),
  });
  let formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: x,
  });
  return (
    <>
      <div className="container">
        <div className="imges d-flex justify-content-center align-items-center my-5">
          <img src={img1} className="w-25" alt="" />
        </div>
        <form onSubmit={formik.handleSubmit}>
      <div className="form w-50 m-auto">
      <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <div className="flag d-flex">
                  
                    <div className="handle">
                        <img src={img2} className='w-100
                        ' alt="" />
                    </div>
                    <span className='mx-1'>002</span>
                </div>
                <input id='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="text" placeholder='رقم التليفون' name="phone" className='  text-end' />
                <div className="icon">
                <i class="fa-solid fa-phone"></i>
                </div>
              
                </div>
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder='كلمه المرور' className=' w-75 text-end' name="password" />
                <div className="icon">
                <i class="fa-solid fa-lock"></i>
                </div>
                <div className="icon position-absolute start-0">
                <i class="fa-solid fa-eye-slash"></i>
                </div>
                </div>
              
      </div>
      <div className="reset w-50 m-auto">
          <Link className="btn fw-bolder" to='/Reset'>
نسيت كلمه السر؟
          </Link>
        </div>
          <div className="buttons d-flex flex-column align-items-center justify-content-center">
            <button id="Login" type='submit' className=" my-2 w-25 rounded-4 p-3 btn btn-lg border border-1">تسجيل</button>
          
          </div>
         
        </form>
       
     
      
      </div>
    </>
  );
}
