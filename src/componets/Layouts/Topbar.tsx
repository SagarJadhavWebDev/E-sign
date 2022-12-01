import getCookie from "@/utils/getCookie";
import removeCookies from "@/utils/removeCookies";
import { signOut } from "next-auth/react";
interface TopbarProps {}
const Topbar: React.FC<TopbarProps> = ({}) => {
  return (
    <nav className="bg-transparent w-full  py-2 border-gray-200 px-2  ">
      <div className="container flex flex-wrap items-center justify-between ">
        <a href="https://flowbite.com/" className="flex items-start">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Flowbite
          </span>
        </a>
        <div className="flex justify-between rounded-2xl w-48">
          <div
            title="logout"
            onClick={() => {
              signOut();
            }}
            className="rounded-full relative flex drop-shadow-2xl  bg-white cursor-pointer font-bold hover:text-purple-700 hover:font-bold p-3 shadow-lg hover:shadow-xl "
          >
            <svg
              className="w-8 h-8 drop-shadow-2xl"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <span className="bg-purple-700 w-5 z-50 h-5 text-xs  text-ellipsis font-semibold text-center items-center justify-center align-middle flex absolute text-white rounded-full right-2 top-2.5 border ">
              10
            </span>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              signOut()
                .then((e: any) => {
                  removeCookies();
                })
                .catch((err) => {
                  console.log("SIGN OUT ERROR", err);
                });
            }}
            className="rounded-full relative flex drop-shadow-2xl  bg-white cursor-pointer font-bold hover:text-purple-700 hover:font-bold p-3 shadow-lg hover:shadow-xl "
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
