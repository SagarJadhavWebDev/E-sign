import ImageConstants from "@/constants/ImageConstants";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
interface loginProps {}
const Login: React.FC<loginProps> = ({}) => {
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
  return (
    <div
      ref={scrollRef}
      className="h-full duration-500  hover:ease-in-out
     transform border
       rounded-3xl shadow-xl
     grid md:grid-cols-2 md:m-20 m-10  overflow-hidden "
    >
      <div className="col-6 p-10  ">
        <p className="text-4xl md:text-start  mx-5 text-indigo-600 font-bold ">
          Sign Up
        </p>
        <div className="flex  my-10 mx-0">
          <hr className="text-red-300 my-3  bg-red-300 font-extrabold w-14" />
          <span className="mx-5 text-sm text-red-500 font-bold">
            Sign up with
          </span>
        </div>
        <div className="grid md:grid-cols-2   md:text-start gap-5">
          <div className="">
            <button
              className="border outline-none   justify-evenly p-4 
             inline-flex items-center rounded-xl shadow-sm
              w-5/6 hover:shadow-xl transition-shadow  transition-all "
            >
              <img
                className="object-fit w-5"
                src="https://www.svgrepo.com/show/355037/google.svg"
              />
              <span className="md:text-sm text-xs font-medium text-start">
                Sign Up With Google
              </span>
            </button>
          </div>
          <div className="">
            <button
              className="border outline-none   justify-evenly p-4 
              inline-flex items-center rounded-xl shadow-sm
               w-5/6 hover:shadow-xl transition-shadow  transition-all "
            >
              <img
                className="object-fit w-5"
                src="https://www.svgrepo.com/show/158427/facebook.svg"
              />
              <span className="md:text-sm text-xs font-medium text-start">
                Sign Up With Facebook
              </span>
            </button>
          </div>
        </div>
        <div className="grid  my-4 mt-5 grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-start grid">
            <label className=" text-start text-gray-600 mx-2 text-sm font-medium">
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              className="p-3  hover:shadow-xl transition-shadow transition-all my-2 bg-indigo-20 w-5/6 outline-none border rounded-lg  drop-shadow-sm"
              placeholder="Enter Your Name"
            />
          </div>

          <div className=" text-start grid">
            <label className="text-gray-600 mx-2 text-sm font-medium">
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              className="p-3 my-2 hover:shadow-xl transition-shadow transition-all bg-indigo-20 w-5/6 outline-none border rounded-lg  drop-shadow-sm"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
        <div className="grid my-6 grid-cols-1 gap-5">
          <label className="text-gray-600 mx-2 text-sm font-medium">
            Password
          </label>
          <input
            name="email"
            required
            type="password"
            className="p-3   relative hover:shadow-xl transition-shadow transition-all bg-indigo-20 outline-none border rounded-lg  drop-shadow-sm"
            placeholder="*******"
          />
        </div>
        <div className=" justify-between  flex mx-1 ">
          <div className="grow-0 mr-3 md:mr-0  m-auto  justify-center flex-cloumn items-center text-center">
            <input
              type="checkbox"
              className="p-2 w-5 h-5 trasition-all cursor-pointer text-blue-600 bg-gray-100 rounded-3xl border-gray-300 "
            />
          </div>
          <div className="grow md:flex cursor-pointer contents text-start ">
            <span className="md:text-sm  text-xs text-red-500 font-medium  md:mx-2 ">
              I've read and agree with Terms Of Service and our Privacy Policy
            </span>
          </div>
        </div>
        <div className="hover:scale-110 cursor-pointer duration-500 trasition-all  bg-red-600 mt-6 mb-7 p-4 justify-center items-center text-center shadow-red-600  flex w-16 h-16 rounded-2xl shadow-2xl">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width={"20px"}
            height={"20px"}
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
        </div>
        <div className=" text-sm flex">
          <p className="text-gray-600 font-medium">Already have an account ?</p>
          <span className="text-red-600 mx-2 font-medium cursor-pointer">
            Sign in
          </span>
        </div>
      </div>

      <div className="col-6  flex flex-cloumn justify-center rounded-xl items-center text-center">
        <img
          className="hover:animate-bounce  trasition-all duration-900"
          src={ImageConstants.SignupImage}
        />
      </div>
    </div>
  );
};

export default Login;
