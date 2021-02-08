import React, {Component} from 'react';
import WebNavbar from "./WebNavbar";
import Fedback from "./Fedback";
import WebServices from "./WebServices";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

class WebDevelopment extends Component {
    render() {
        return (
            <div>
                <WebNavbar/>
                    <Fedback/>
                    <WebServices/>
                  <ContactUs/>
                  <Footer/>
            </div>
        );
    }
}

export default WebDevelopment;