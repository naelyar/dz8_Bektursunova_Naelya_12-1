import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Blog =(props) => {
    const params = useParams()
    console.log(useLocation());
    return (
        <div>
            <h1>{params.news}</h1>
            <p>lorem15lorem15lorem1 5lorem 15lorem 15lor em15lorem 15lorem15lorem15</p>
        </div>
    )
}

export default Blog