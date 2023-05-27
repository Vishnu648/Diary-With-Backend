import { NavLink } from "react-router-dom"
const Navbar=()=> {
  return (
    <>
        <div className="navBar">
            <h1>Personal Diary</h1>

            <NavLink to="/create" className="newButton">Add New</NavLink>
        </div>
    </>
  )
}

export default Navbar
