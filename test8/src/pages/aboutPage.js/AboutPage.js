import { NavLink, useNavigate } from "react-router-dom";
import News from "../../components/news/News";

function AboutPage () {
    const navigate = useNavigate()
    return (
        <>
        <button onClick={ () => navigate (-1)}>back</button>
        <h1>AboutPage</h1>

        <NavLink to="/description">description</NavLink>
        <News/>
</>

    )
}

export default AboutPage;