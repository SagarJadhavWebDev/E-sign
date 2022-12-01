import { Children } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface LayoutProps {
  children: any;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="md:grid overflow-hidden md:grid-cols-11 md:grid-rows-2  ">
      <div className="box md:flex hidden 5 shadow-2xl row-span-6 col-start-auto col-span-0">
        {" "}
        <Sidebar />
      </div>
      <div className="box row-start-auto row-end-1 col-start-2 col-end-12">
        <Topbar />
      </div>
      <div className="box  row-start-auto row-span-3 col-start-2 col-end-12">
        {"sagar"}
        {children}
      </div>
      <div className="box row-start-auto  col-start-2 col-end-12">
        {" "}
        <Footer />
      </div>
    </div>
    // <div>
    //   <div className="grid overflow-hidden grid-cols-6 grid-rows-2 ">
    //     <div className="row-span-3 ">
    //       <Sidebar />
    //     </div>
    //     <div className="col-start-2  col-end-12">
    //       {" "}
    //       <Topbar />
    //     </div>
    //     <div className="col-start-2 col-end-12 bg-slate-200 w-full h-full"></div>
    //     <div className="col-start-2  col-end-12">
    //       {" "}
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Layout;
