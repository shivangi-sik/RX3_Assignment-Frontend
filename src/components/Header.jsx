import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Student Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className= "nav-item"><NavLink className="nav-link" to="/">Students</NavLink></li>
                    <li className= "nav-item"><NavLink className="nav-link" to="/classes">Classes</NavLink></li>
                    <li className= "nav-item"><NavLink className="nav-link" to="/schoolView">School</NavLink></li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Header
