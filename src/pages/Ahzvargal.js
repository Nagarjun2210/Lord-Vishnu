import d from "./Data/azhvargal_data.js";
import FlexboxPage from "./components/FlexboxPages.js";

const Ahzvargal = () => {
    
    const title = "ஆழ்வார்கள்";
    const page = FlexboxPage(d, title);
    return page;
    
};

export default Ahzvargal;
