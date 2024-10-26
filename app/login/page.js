"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../components/Context/AuthProvider";
import CommonRoute from "../components/Routing/CommonRoute";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const { login } = useAuthContext();

  const handleSubmit = async (values) => {
    await login(values);
  };

  return (
    <CommonRoute>
      <main>
        <div className="flex justify-center items-center bg-gray-100 font-[sans-serif] h-full md:min-h-screen p-4">
          <div className="grid justify-center max-w-md mx-auto">
            <div>
              <Image
                className="w-full object-cover rounded-2xl"
                src="https://readymadeui.com/login-image.webp"
                alt="login-image"
                width={500}
                height={500}
              />
            </div>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
                  <div className="mb-12">
                    <h3 className="text-3xl font-extrabold text-blue-600">
                      Sign In
                    </h3>
                  </div>

                  <div className="relative flex flex-col mb-6">
                    <Field
                      name="email"
                      type="text"
                      className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div className="relative flex flex-col mb-6">
                    <Field
                      name="password"
                      type="password"
                      className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter password"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div className="mt-16">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                      {isSubmitting ? "Signing in..." : "Sign in"}
                    </button>
                  </div>

                  <hr className="my-6 border-gray-300" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </CommonRoute>
  );
};

export default Login;
