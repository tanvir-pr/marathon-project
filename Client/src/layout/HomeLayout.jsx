import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Pagetittle from "../component/Pagetittle";
import { Toaster } from 'react-hot-toast';
import MarathonCommunity from "../component/MarathonCommunity";
import AboutMarathon from "../component/AboutMarathon";
import HowItWorks from "../component/HowItWorks";


const HomeLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
             <Pagetittle
            favicon="/assets/favicon.png"
                title="Home"></Pagetittle>
            <Navbar></Navbar>
           
           
            <Outlet></Outlet>
            <MarathonCommunity></MarathonCommunity>
            <AboutMarathon></AboutMarathon>
            <HowItWorks></HowItWorks>
           
           
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;