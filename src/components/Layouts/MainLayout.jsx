import { Header } from "../Fragments/Header";
import { Navbar } from "../Fragments/Navbar";

const MainLayout = (props) => {

    const { children } = props;

    return (
      <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full">
       {/* navbar start*/}
        <Navbar/>
        {/* navbar end*/}
        <div className="w-screen">
        {/* header start*/}
        <Header/>
        {/* header end*/}  
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content start*/}
        </div>
      </div>
    );
  };
  
  export default MainLayout;