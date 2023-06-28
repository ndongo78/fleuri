import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useRegisterMutation } from "../app/api/authApi";
import { AlertBox } from "../components/AlertBox";
import {Link} from "react-router-dom" 

export const Register = () => {
  const [register] = useRegisterMutation();
  const [isSucces, setisSucces] = useState(false);

  const handleSumbit = (values: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
  }) => {
    register(values)
      .unwrap()
      .then(() => {
        setisSucces(true);
      })
      .catch((error) => {
        console.log("data", error);
      });
  };

  const validatorSchema = yup.object().shape({
    email: yup.string().required("L'email est required").email("Invalid email"),
    password: yup
      .string()
      .required("Le mot de passe est required")
      .min(8, "Le mot de passe doit contenir minimum 8 characters"),
    firstname: yup
      .string()
      .required("Le Nom est required")
      .matches(/^[a-zA-Z ]*$/, "Le nom est invalid"),
    lastname: yup
      .string()
      .required("Le Nom est required")
      .matches(/^[a-zA-Z ]*$/, "Le nom est invalid"),
  });

  return (
    <div className="text-red-400">
      <section className="py-26">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto py-8 relative">
            {isSucces && <AlertBox setIsSuccess={setisSucces} />}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                S'inscrire
              </h2>
            </div>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                password: "",
                email: "",
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
                  <div className=" flex gap-6">
                    <div className="mb-6">
                      <label className="block mb-2 font-extrabold" htmlFor="">
                        Nom
                      </label>
                      <input
                        value={values.firstname}
                        onChange={handleChange("firstname")}
                        onBlur={handleBlur("firstname")}
                        className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-1 border-indigo-900 rounded"
                        type="text"
                      />
                      {touched.firstname && errors.firstname && (
                        <p
                          style={{
                            fontSize: 16,
                            color: "red",
                            textAlign: "right",
                          }}
                        >
                          {errors.firstname}
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 font-extrabold" htmlFor="">
                        Prénom
                      </label>
                      <input
                        value={values.lastname}
                        onChange={handleChange("lastname")}
                        onBlur={handleBlur("lastname")}
                        className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-1 border-indigo-900 rounded"
                        type="text"
                      />
                      {touched.lastname && errors.lastname && (
                        <p
                          style={{
                            fontSize: 16,
                            color: "red",
                            textAlign: "right",
                          }}
                        >
                          {errors.lastname}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 font-extrabold" htmlFor="">
                      Email
                    </label>
                    <input
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-1 border-indigo-900 rounded"
                      type="email"
                    />
                    {touched.email && errors.email && (
                      <p
                        style={{
                          fontSize: 16,
                          color: "red",
                          textAlign: "right",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 font-extrabold" htmlFor="">
                      Password
                    </label>
                    <input
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-1 border-indigo-900 rounded"
                      type="password"
                    />
                    {touched.password && errors.password && (
                      <p
                        style={{
                          fontSize: 16,
                          color: "red",
                          textAlign: "right",
                        }}
                      >
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                    <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                      <label htmlFor="">
                        <input type="checkbox" />
                        <span className="ml-1 font-extrabold">
                          se rappeler demoi
                        </span>
                      </label>
                    </div>
                    <div className="w-full lg:w-auto px-4">
                      <a
                        className="inline-block font-extrabold hover:underline"
                        href="#"
                      >
                        Mot de passe oubliée?
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSubmit()}
                    className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#e54] hover:bg-[#e54] border-3 border-indigo-900 shadow rounded-xl transition duration-200"
                  >
                    S'inscrire
                  </button>
                  <p className="text-center font-extrabold">
                    Vous avez déja un compte?{" "}
                    <Link to="/login" className="text-red-500 hover:underline" >
                      Se connecter
                    </Link>
                  </p>
                </>
              )}
            </Formik>
          </div>
        </div>
      </section>

      <div style={{ border: "0.1px solid #fce" }} />
    </div>
  );
};
