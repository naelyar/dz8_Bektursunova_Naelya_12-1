import classes from "./menu.module.css";
import {Link , NavLink} from "react-router-dom";

function Menu () {
    return (
        <ul className={classes.menu} >
            <li>
                <NavLink to="/" className={classes.link}>MainPage</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={classes.link}>AboutPage</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={classes.link}>ContactPage</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" className={classes.link}>PortfolioPage</NavLink>
            </li>
            <li>
                <NavLink className={classes.link} to="/blogs" >blogs</NavLink>
            </li>
        </ul>
    )
}

export default Menu;