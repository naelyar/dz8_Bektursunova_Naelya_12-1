import React from "react";
import {useLocation} from "react-router-dom";


const PortfolioPage = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div>
        <h1>PortfolioPage</h1>


</div>

    )
}

export default PortfolioPage;