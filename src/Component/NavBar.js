import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li> <Link to="/" >Home</Link></li>
                <li > <Link to="/courses" >Courses</Link></li>
                <li> <Link to="/teacher" >Teacher</Link></li>
                <li> <Link to="/student" >Student</Link></li>
            </ul>
        </div>
    )

}


export default NavBar;