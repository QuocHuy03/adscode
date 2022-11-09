import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import "./index.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "../../Slider/Slider";

const SignUp = () => {
  // creact firebase : email,password
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          toast.error("The email address is already in use", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (error.code == "auth/invalid-email") {
          toast.error("The email address is not valid.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (error.code == "auth/operation-not-allowed") {
          toast.error("Operation not allowed.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (error.code == "auth/weak-password") {
          toast.error("The password is too weak.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="columns-xl mb-3">
            <div className="mb-3">
              <div className=" bg-green-700 text-white p-2">Đăng Kí</div>
              <div className=" bg-zinc-800 text-white px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xl-6 offset-xl-3">
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Địa Chỉ E-Mail (*)
                    </label>{" "}
                    <input
                      type="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xl-6 offset-xl-3">
                    <label
                      htmlFor="password"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Mật Khẩu (*)
                    </label>{" "}
                    <input
                      type="password"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* {error && <div>{error}</div>} */}

                <div className="pt-6">
                  <div className="bg-green-700 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <button
                      onClick={handleSignup}
                      // disabled={loading || currentUser}
                      className="btn btn-success"
                    >
                      <svg
                        aria-hidden="true"
                        className="svg-inline--fa fa-user-plus w-4 inline cc"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-plus"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                        ></path>
                      </svg>{" "}
                      Đăng Kí
                    </button>
                  </div>
                </div>
                <div className="text-center text-white margin-form py-3">
                  <p className="">- HOẶC -</p>
                </div>
                <div className="bg-red-700 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a
                    href="/signin"
                    className="btn btn-danger text-1xl font-bold"
                  >
                    <svg
                      className="svg-inline--fa fa-sign-in-alt w-4 inline cl"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="sign-in-alt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                      ></path>
                    </svg>{" "}
                    Đăng Nhập
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs">
            <div className="">
              <div className="bg-green-700 text-white p-2">Quy Tắc</div>
              <div className="bg-zinc-800 text-white  px-8 pt-6 pb-8 mb-4">
                <ul>
                  <li>
                    - Tài khoản chỉ được dùng a-z 0-9 dấu gạch ngang(-) và dấu
                    gạch dưới(_)!
                  </li>
                  <br />
                  <li>- Nhập đúng địa chỉ Email thật vì bạn cần xác thực!</li>
                  <br />
                  <li>
                    - Tài khoản tối thiểu 6 ký tự và tối đa 40 ký tự, không được
                    là một con số!
                  </li>
                  <br />
                  <li>- Mật khẩu tối thiểu 6 ký tự, phải bao gồm chữ và số!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <Slider/> */}
      </div>
    </>
  );
};

export default SignUp;
