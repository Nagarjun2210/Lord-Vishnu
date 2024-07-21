import d from "./Data/Dasavatharam_data.js";
import FlexboxPage from "./components/FlexboxPages.js";
import ReactGA from "react-ga4";
import { useEffect } from "react";
const Dasavatharam = () => {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: "Dasavatharam",
            title: "Dasavatharam"
        });
      }, []);

    const title = "தசாவதாரம்";
    const page = FlexboxPage(d, title);
    return page;
};

export default Dasavatharam;
