import React, {Component} from 'react';
import '../component/main.css'
import TestingNavbar from "./TestingNavbar";
import Fedback from "./Fedback";
import TestingService from "./TestingService";
import ContactUs from "./ContactUs";
import Footer from "./Footer";


class TestingPage extends Component {
    render() {
        return (
     <div>
         <TestingNavbar/>
         <Fedback/>
         <TestingService/>
         <ContactUs/>
         <Footer/>
     </div>
        );
    }
}

export default TestingPage;