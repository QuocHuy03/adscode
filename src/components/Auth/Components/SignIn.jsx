import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        if (error.code == "auth/user-not-found") {
          toast.error("User not found", {
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
        } else if (error.code == "auth/internal-error") {
          toast.error("Internal error", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (error.code == "auth/wrong-password") {
          toast.error("The password is wrong.", {
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
  // gg
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    navigate("/");
  };
  // fb
  const handleFacebookiSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
    navigate("/");
  };
  // git
  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider);
    navigate("/");
  }

  return (
    <>
      <ToastContainer />
      <div className="container max-w-xl mx-auto">
            <div className="mb-3">
              <div className=" bg-blue-700 text-white p-2">Đăng Nhập</div>
              <div className=" bg-zinc-800 text-white px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xl-6 offset-xl-3">
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Tài Khoản & Email
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
                      Mật Khẩu
                    </label>{" "}
                    <input
                      type="password"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-check-label" htmlFor="remember">
                    <input className="form-check-input" type="checkbox" />
                  </label>{" "}
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Nhớ Tài Khoản
                  </label>{" "}
                  <NavLink
                    className="float-right text-blue-500"
                    to="/"
                  >
                    Quên Mật Khẩu?
                  </NavLink>{" "}
                </div>
                <div className="pt-6">
                  <div className="bg-blue-700 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <button onClick={handleSignin} className="btn btn-success">
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
                      Đăng Nhập
                    </button>
                  </div>
                </div>
                <div className="text-center text-white margin-form py-3">
                  <p className="">- HOẶC -</p>
                </div>
                <div className="container flex flex-wrap gap-2 justify-around">
                  <div className="">
                    <button className="bg-green-700 py-2 px-6 border-0 rounded text-1xl font-bold">
                      <svg
                        className="svg-inline--fa fa-user-plus w-4 inline cc"
                        aria-hidden="true"
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
                      </svg>
                      &nbsp;Đăng Kí{" "}
                    </button>
                  </div>
                  <div className="">
                    <button
                      onClick={handleFacebookiSignIn}
                      className="bg-blue-700 py-2 px-6 border-0 rounded c-text-1xl c-font-bold"
                    >
                      <svg
                        className="svg-inline--fa fa-facebook-square w-3 inline fb"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-square"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                        ></path>
                      </svg>
                      &nbsp;Facebook
                    </button>
                  </div>
                  <div className="">
                    <button
                      onClick={handleGoogleSignIn}
                      className="bg-red-700 py-2 px-6 border-0 rounded text-1xl c-font-bold"
                    >
                      <svg
                        className="svg-inline--fa fa-google w-3 inline gg"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        ></path>
                      </svg>
                      &nbsp;Google
                    </button>
                  </div>
                  <div className="">
                    <button
                      onClick={handleGithubSignIn}
                      className="bg-white text-black p-3 py-2 px-6 border-0 rounded font-bold"
                    >
                      <svg
                        className="svg-inline--fa fa-github w-3 inline git"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        ></path>
                      </svg>
                      &nbsp;GitHub
                    </button>
                  </div>
                </div>
          </div>
        </div>
      </div>
      {/* <Slider/> */}
    </>
  );
};

export default SignIn;
