import React, {Component} from 'react';
import AutomationNavbar from "./AutomationNavbar";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import AutomationServices from "./AutomationServices";

class AutomationPage extends Component {
    render() {
        return (
            <div>
                <AutomationNavbar/>
                <Fedback/>
                <AutomationServices/>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }
}

export default AutomationPage;