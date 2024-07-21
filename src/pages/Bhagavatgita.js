import ReactGA from "react-ga4";
import d from "./Data/Bhagavatgita_data.js";
import FlexboxPage from "./components/FlexboxPages.js";
import { useEffect } from "react";
const Bhagavatgita = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);
        
      
    const title = "பகவத் கீதை";
    const page = FlexboxPage(d, title);
    return page;
};

export default Bhagavatgita;
