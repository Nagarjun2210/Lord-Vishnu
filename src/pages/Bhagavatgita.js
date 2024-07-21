import d from "./Data/Bhagavatgita_data.js";
import FlexboxPage from "./components/FlexboxPages.js";
import ReactGA from "react-ga4";
import { useEffect } from "react";
const Bhagavatgita = () => {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: "Bhagavatgita",
            title: "Bhagavatgita"
        });
      }, []);
    const title = "பகவத் கீதை";
    const page = FlexboxPage(d, title);
    return page;
};

export default Bhagavatgita;
