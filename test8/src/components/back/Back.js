import { useNavigate } from "react-router-dom";

function Back () {
    const navigate = useNavigate();
    const back = () => {
        navigate (-1);
    }
    return ( 
        <button onClick={back}>backMain</button>
    )
}
    
    


export default Back;