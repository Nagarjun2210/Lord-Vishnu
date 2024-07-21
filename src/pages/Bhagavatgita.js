import d from "./Data/Bhagavatgita_data.js";
import FlexboxPage from "./components/FlexboxPages.js";

const Bhagavatgita = () => {
    const title = "பகவத் கீதை";
    const page = FlexboxPage(d, title);
    return page;
};

export default Bhagavatgita;
