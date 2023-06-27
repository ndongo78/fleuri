import jwt_decode from "jwt-decode";
import { Formik } from "formik";
import * as yup from 'yup';
import { useLoginMutation } from '../app/api/authApi';
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from "react";

export const Login = () => {
 const [login]= useLoginMutation()
 const navigate=useNavigate()


 useEffect(() => {
   const existing = sessionStorage.getItem('user')
   if (existing){
    navigate('/profil')
   }
   
 }, [])
 


   const handleSumbit=(values:{username:string,password:string}) => {
    // const formData = {
    //     grant_type: 'password',
    //     username: values.username,
    //     password: values.password,
    //     scope: '',
    //   };
      const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('username', values.username);
    data.append('password', values.password);
    data.append('scope', '');
      login(data)
      .unwrap()
      .then((data) => {
        const user_id:string= jwt_decode(data.access_token)
         sessionStorage.setItem("user", user_id)
         //console.log("data", user_id)
         navigate("/profil")
      })
      .catch((error) => {
        console.log("data", error)
      });
   }

    const validatorSchema=yup.object().shape(
        {
        username:yup.string()
        .required("L'email est required")
        .email("Invalid email"),
        password: yup
        .string()
        .required('Le mot de passe est required')
        .min(8, 'Le mot de passe doit contenir minimum 8 characters'),
        }
    )

  return (
    <div className='text-red-400'>
<section className="py-26">
  <div className="container px-4 mx-auto">
    <div className="max-w-lg mx-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Se connecter</h2>
          </div>
          <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => handleSumbit(values)}
          validationSchema={validatorSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
          <input value={values.username} onChange={handleChange('username')} onBlur={handleBlur('username')} className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-1 border-indigo-900 rounded" type="username"  />
          {touched.username && errors.username && (
                    <p
                      style={{ fontSize: 16, color: "red", textAlign: "right" }}
                    >
                      {errors.username}
                    </p>
                  )}
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
          <input value={values.password} onChange={handleChange('password')} onBlur={handleBlur('password')} className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-1 border-indigo-900 rounded" type="password"  />
          {touched.password && errors.password && (
                    <p
                      style={{ fontSize: 16, color: "red", textAlign: "right" }}
                    >
                      {errors.password}
                    </p>
                  )}
        </div>
        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label htmlFor="">
              <input type="checkbox" />
              <span className="ml-1 font-extrabold">se rappeler demoi</span>
            </label>
          </div>
          <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="#">Mot de passe oubliée?</a></div>
        </div>
        <button onClick={()=>handleSubmit()} className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#e54] hover:bg-[#e54] border-3 border-indigo-900 shadow rounded-xl transition duration-200">Se connecter</button>
        <p className="text-center font-extrabold">Vous n'avez pas de compte? <Link to="/register" className="text-red-500 hover:underline decoration-none">S'inscrire</Link></p>
            </>
          )}
          </Formik>
    </div>
  </div>
</section>
<div style={{border:"0.1px solid #fce"}} />
    </div>
  )
}
