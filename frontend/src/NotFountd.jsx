import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";

const NotFountd = () => {
  const home=useNavigate();
  const { id } = useParams();

  return (

    <div className="notFound">
      <h1>Error 404</h1>
      <p>Not found</p>    
      <button className="backbtn" onClick={()=>(home('/'))}>Home</button>

    
    </div>
  )
}

export default NotFountd
