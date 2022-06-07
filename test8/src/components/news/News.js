import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const News = () => {
    const navigate = useNavigate();

    const backTo = () => {
        navigate("/portfolio", {replace: true, state: {
             id: 1
            }});
    }

    return (
        <div>
            <button onClick={backTo}>back</button>
            <h3>News number one</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi dolorem ducimus ea earum eius est itaque iure magnam, natus perspiciatis qui repellendus similique sint tempora veritatis vero voluptas voluptatum! Consequuntur eaque molestiae molestias optio quam quas totam voluptatibus! Aspernatur consequatur exercitationem fugiat quia quo quos similique! Eaque, nam, praesentium?
            </p>
        </div>
    )
};

export default News;