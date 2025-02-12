import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Pagetittle from "../component/Pagetittle";
import { Toaster } from 'react-hot-toast';


const HomeLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
             <Pagetittle
            favicon="/assets/favicon.png"
                title="Home"></Pagetittle>
            <Navbar></Navbar>
           
           
            <Outlet></Outlet>
           
           
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;