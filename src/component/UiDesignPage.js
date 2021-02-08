import React, {Component} from 'react';
import UiDesignNavbar from "./UiDesignNavbar";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import UiDesignServices from "./UiDesignServices";

class UiDesignPage extends Component {
    render() {
        return (
            <div>
                <UiDesignNavbar/>
                <Fedback/>
                <UiDesignServices/>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }
}

export default UiDesignPage;