import ImageConstants from "@/constants/ImageConstants";
import routes from "@/constants/routes";
import withPrivateRoute from "@/hoc/withPrivateRoute";
import onLoginFaild from "@/utils/google/onLoginFaild";
import { refreshTokenSetup } from "@/utils/refreshTokenSetup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { storeUser } from "reducers/userReducer/user.action";
interface OnBoardUserProps {
  type: "login" | "signup";
}
const OnBoardUser: React.FC<OnBoardUserProps> = ({ type }) => {
  const [terms, setTerms] = useState(true);
  const router = useRouter();
  const scrollRef = useRef();
  useEffect(() => {
    if (scrollRef) {
      //@ts-ignore
      scrollRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  const onLoginSuccess = (res) => {
    console.log(res);
    document.cookie = `token=${res?.tokenObj.access_token}; path=/`;
    document.cookie = `user=${JSON.stringify(res?.profileObj)}; path=/`;
    dispatch(storeUser(res.profileObj));
    refreshTokenSetup(res);
    //toast.success("sagar");
    router.push(routes.home);
  };
  const { signIn } = useGoogleLogin({
    onSuccess: onLoginSuccess,
    onFailure: onLoginFaild,
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    cookiePolicy: "single_host_origin",
    accessType: "offline",
  });
  const dispatch = useDispatch();
  const handleSignup = (e) => {
    if (type === "login") {
      e.preventDefault();
      const payload = {
        name: e.target?.name?.value,
        email: e.target?.email?.value,
        password: e.target?.password?.value,
        meta_data: [{ dummyData: "sagar" }],
      };
      document.cookie = `user=${JSON.stringify(payload)}; path=/`;
      document.cookie = `token=${JSON.stringify(payload)}; path=/`;
      dispatch(storeUser(payload));
      // toast.success("sagar");
      router.push(routes.home);
    } else {
      //handle signup
    }
  };
  return (
    <div
      ref={scrollRef}
      className="h-full duration-500  hover:ease-in-out
     transform border
       rounded-3xl shadow-2xl
     grid md:grid-cols-2 md:m-20  m-6  overflow-hidden "
    >
      {/* <Toaster position="bottom-right" toastOptions={{}} reverseOrder={false} /> */}
      <div className="col-6 md:p-10 p-5 ">
        <p className="text-4xl  mx-5 text-red-600 font-bold capitalize ">
          {type === "signup" ? "SignUp" : "Login"}
        </p>
        <div className="flex  my-10 mx-1">
          <hr className="text-red-300 my-3.5 border border-red-500 bg-red-300 font-extrabold w-14" />
          <span className="mx-2 text-sm text-red-500 font-bold">
            {type === "signup" ? "Sign up" : "Login"} with
          </span>
        </div>
        <div className="grid md:grid-cols-2  md:text-start    gap-5">
          <div className="">
            <button
              onClick={() => {
                signIn();
              }}
              className="border outline-none   justify-evenly p-4 
             inline-flex items-center rounded-xl shadow-sm
              md:w-5/6 w-full hover:shadow-xl transition-shadow duration-500 "
            >
              <img className="object-fit w-5" src={ImageConstants.GoogleIcon} />
              <span className="md:text-sm capitalize text-xs font-medium text-start">
                {type === "signup" ? "Sign up" : "Login"} With Google
              </span>
            </button>
          </div>
          <div className="">
            <button
              className="border outline-none   justify-evenly p-4 
              inline-flex items-center rounded-xl shadow-sm
              md:w-5/6 w-full hover:shadow-xl transition-shadow  duration-500 "
            >
              <img
                className="object-fit w-5"
                src={ImageConstants.FacebookIcon}
              />
              <span className="md:text-sm text-xs capitalize font-medium text-start">
                {type === "signup" ? "Sign up" : "Login"} With Facebook
              </span>
            </button>
          </div>
          <p className="m-auto md:hidden flex  font-medium text-medium text-gray-500">
            OR
          </p>
        </div>
        <form onSubmit={handleSignup}>
          <div
            className={
              type === "signup"
                ? "grid  my-4 mt-5 grid-cols-1 md:grid-cols-2 gap-5"
                : " my-4 mt-5"
            }
          >
            {type !== "login" && (
              <div className="text-start grid">
                <label className=" text-start text-gray-600 mx-2 text-sm font-medium">
                  Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="p-3  hover:shadow-xl duration-500  transition-shadow transition-all my-2 bg-indigo-20  md:w-5/6 w-full outline-none border rounded-lg  drop-shadow-sm"
                  placeholder="Enter Your Name"
                />
              </div>
            )}

            <div className=" text-start grid">
              <label className="text-gray-600 mx-2 text-sm font-medium">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                className="p-3 my-2 hover:shadow-xl duration-500  transition-shadow bg-indigo-20  md:w-full w-full outline-none border rounded-lg  drop-shadow-sm"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="grid my-3 grid-cols-1 gap-5">
            <label className="text-gray-600 mx-2 text-sm font-medium">
              Password
            </label>
            <input
              name="password"
              required
              type="password"
              className="p-3   relative hover:shadow-xl duration-700 transition-shadow bg-indigo-20 outline-none border rounded-lg  drop-shadow-sm"
              placeholder="*******"
            />
          </div>
          {type !== "login" && (
            <div className="  mt-7  flex mx-1 ">
              <div className="grow-0 mr-3 md:mr-1   justify-center flex-cloumn items-center text-center">
                <input
                  onChange={() => {
                    setTerms(!terms);
                  }}
                  type="checkbox"
                  className="p-2 w-4 h-4 trasition-all cursor-pointer text-blue-600 bg-gray-100 rounded-3xl border-gray-300 "
                />
              </div>
              <div className="grow md:flex w-20 cursor-pointer contents text-start ">
                <a className="md:text-base  hover:underline  text-xs text-red-500 font-medium  md:mx-2 ">
                  I've read and agree with Terms Of Service and our Privacy
                  Policy
                </a>
              </div>
            </div>
          )}
          <button
            disabled={router.pathname === "/login" ? false : terms}
            className={
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 hover:scale-110 cursor-pointer duration-700 trasition-all  bg-red-600 mt-8 md:mt-6 mb-7 p-4 justify-around items-center text-center shadow-red-600  flex w-16 h-16 rounded-2xl shadow-2xl"
            }
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              width={"25px"}
              height={"25px"}
              fill={"white"}
              color="white"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_27_"
                d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </button>
        </form>
        <div className="mx-2 m-auto  text-sm flex flex-column justify-start items-center">
          <p className="text-gray-600 font-medium">
            {" "}
            {type === "login"
              ? "Don't have an account ?"
              : "Already have an account ?"}
          </p>
          <a
            onClick={() => {
              router.push(
                {
                  pathname: type === "signup" ? routes.login : routes.signup,
                  query: { type: type },
                },
                { pathname: type === "signup" ? routes.login : routes.signup }
              );
            }}
            className="text-red-600 hover:shadow-2xl text-medium hover:underline mx-2 font-medium cursor-pointer"
          >
            {type === "login" ? "Sign Up" : "Sign In"}
          </a>
        </div>
      </div>

      <div className="col-6 hidden md:flex flex-cloumn justify-center rounded-xl items-center text-center">
        <img
          className="hover:scale-90 hover:cursor-pointer  hover:drop-shadow-2xl rounded-2xl trasition-all duration-700"
          src={ImageConstants.SignupImage}
        />
      </div>
    </div>
  );
};

export default withPrivateRoute(OnBoardUser);
