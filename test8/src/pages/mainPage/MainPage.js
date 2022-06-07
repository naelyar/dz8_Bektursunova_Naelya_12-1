import React from 'react';
import {useNavigate} from "react-router-dom";

const  url = "https://jsonplaceholder.typicode.com/users";

const MainPage = () => {
    
    const navigate = useNavigate();
    
    const getUsers = () => {
        fetch(url).then(response => {
            if(response.ok) {
                navigate('/portfolio', {replace:true})
            }
        })
    }

    return (
        <div>
            <h1> Main Page</h1>

            <button onClick={getUsers}>get users</button>
        </div>
    )
}

export default MainPage;