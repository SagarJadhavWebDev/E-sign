import routes from "@/constants/routes";
import { useRouter } from "next/router";

interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = ({}) => {
  const router = useRouter();

  const menu = [
    {
      name: "App Tour",
      link: routes.home,
      icon: (
        <svg
          className="  group-hover:text-gray-900 dark:group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Dashboard",
      link: routes.dashboard,
      icon: (
        <svg
          aria-hidden="true"
          className="   group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      ),
    },
    {
      name: "Inbox",
      link: routes.inbox,
      icon: (
        <svg
          className="   group-hover:text-gray-900 dark:group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Templets",
      link: routes.templets,
      icon: (
        <svg
          className="   group-hover:text-gray-900 dark:group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
  ];
  const isSettingActive = router.pathname.includes(routes.settings);

  return (
    <aside className="w-full mt-auto h-full" aria-label="Sidebar">
      <div className="overflow-y-auto h-full justify-center items-center text-center m-auto bg-black   ">
        <div className="m-0 p-0 h-screen w-full overflow-x-hidden">
          {menu.map((m: any) => {
            const isActive = router.pathname.includes(m.link);
            return (
              <div className="text-center hover:scale-110   transition-all duration-300  justify-center items-center my-8">
                <a
                  href={m.link}
                  className={
                    !isActive
                      ? `text-white  active:text-purple:400 duration-300 w-full mb-20 justify-center items-center text-center cursor-pointer`
                      : "text-purple-400 mb-8 duration-300 w-full   justify-center items-center text-center cursor-pointer"
                  }
                >
                  <div
                    className={
                      !isActive
                        ? ` hover:bg-white text-black bg-white mb-2 p-3 font-bold text-center m-auto justify-center items-center rounded-full w-14 h-14`
                        : `bg-purple-600 text-white hover:bg-purple-700  mb-2 p-3 font-bold text-center m-auto justify-center items-center rounded-full w-14 h-14`
                    }
                  >
                    {m.icon}
                  </div>

                  <span className="font-medium hover:scale-110 text-white">
                    {m.name}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
        <div className="text-center  hover:scale-110 w-36  transition-all duration-300  justify-center items-center my-8">
          <a
            href={routes.settings}
            className={
              !isSettingActive
                ? `text-white  active:text-purple:400 duration-300 w-full mb-20 justify-center items-center text-center cursor-pointer`
                : "text-purple-400 mb-8 duration-300 w-full   justify-center items-center text-center cursor-pointer"
            }
          >
            <div
              className={
                !isSettingActive
                  ? ` text-black hover:scale-110 hover:text-white  hover:bg-purple-700 bg-white mb-2 p-3 font-bold text-center m-auto justify-center items-center rounded-full w-14 h-14`
                  : `bg-purple-600 text-white  hover:bg-purple-700  mb-2 p-3 font-bold text-center m-auto justify-center items-center rounded-full w-14 h-14`
              }
            >
              <svg
                className=" hover:scal  group-hover:text-gray-900 dark:group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <span className="font-medium hover:scale-110 text-white">
              {"Settings"}
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
