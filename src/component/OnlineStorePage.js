import React, {Component} from 'react';
import OnlineStoreNavbar from "./OnlineStoreNavbar";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Services from "./Services";

class OnlineStorePage extends Component {
    render() {
        return (
            <div>
             <OnlineStoreNavbar/>
             <Fedback/>
             <Services/>
             <ContactUs/>
             <Footer/>
            </div>
        );
    }
}

export default OnlineStorePage;