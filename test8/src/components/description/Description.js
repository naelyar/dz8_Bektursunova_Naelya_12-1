import { useNavigate } from "react-router-dom";

function Description() {

    const navigate = useNavigate()
    return (
        <div>
        <button onClick={() => navigate (-1)}> back</button>
             <p>
        lorem56vlorem56lorem56lorem56lorem56lorem56vvlorem56v 
        </p>
        </div>
       
    )
    
}

export default Description;