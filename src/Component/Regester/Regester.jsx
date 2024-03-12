import React from 'react'

import img1 from "../Assets/img/logoTransparent.png";
import { useFormik } from "formik";

import * as Yup from "yup";

import img2 from "../Assets/img/eg.svg";
import { Link } from 'react-router-dom';

export default function Regester() {
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
<div className="container py-5">
        <div className="imges d-flex justify-content-center align-items-center my-5">
          <img src={img1} className="w-25" alt="" />
        </div>
       
        <form action="">
            <div className="form w-50 m-auto">
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <input type="text" placeholder='الاسم الثلاثي' className=' w-75 text-end' />
                <div className="icon">
                <i class="fa-solid fa-user"></i>
                </div>
                </div>
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <input type="text" placeholder='البريد الالكتروني' className=' w-75 text-end' />
                <div className="icon">
                <i class="fa-regular fa-envelope"></i>
                </div>
                </div>
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <input type="text" placeholder='اللغه' className=' w-75 text-end' />
                <div className="icon">
                <i class="fa-solid fa-language"></i>
                </div>
                </div>
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <select id="" className=' w-75 p-2  bottom-0 ' name="">
                    <option value="">English</option>
                    <option value="">Arabic</option>

  </select>
                <div className="icon">
                <i class="fa-solid fa-location-dot"></i>
                </div>
                </div>
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <div className="flag d-flex">
                  
                    <div className="handle">
                        <img src={img2} className='w-100
                        ' alt="" />
                    </div>
                    <span className='mx-1'>002</span>
                </div>
                <input id='phone' type="text" placeholder='رقم التليفون' className='  text-end' />
                <div className="icon">
                <i class="fa-solid fa-phone"></i>
                </div>
              
                </div>
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <input type="password" placeholder='كلمه المرور' className=' w-75 text-end' />
                <div className="icon">
                <i class="fa-solid fa-lock"></i>
                </div>
                <div className="icon position-absolute start-0">
                <i class="fa-solid fa-eye-slash"></i>
                </div>
                </div>
                <div className="input d-flex justify-content-center align-items-center border border-3 rounded-3">
                <input type="password" placeholder='تاكيد كلمه المرور' className=' w-75 text-end' />
                <div className="icon">
                <i class="fa-solid fa-lock"></i>
                </div>
                <div className="icon position-absolute start-0">
                <i class="fa-solid fa-eye-slash"></i>
                </div>
                </div>
                <div className="check d-flex justify-content-end align-items-center">
                    <h4 className=' m-4'>اوافق علي الشروط والاحكام</h4>
              
                <input type="checkbox" required className=' fs-3' />
                </div>
                <div className="buttons d-flex justify-content-end m-auto">
                <button className='btn btn-lg btn-success'>انشاء حساب</button>

                </div>
               
              

           
            </div>

            
      
      </form>

      
       
        
     
      </div>



</>
  )
}
