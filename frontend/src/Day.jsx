import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import useFetch from "./useFetch";

const Day = () => {
  const { id } = useParams();
  const { data, error } = useFetch('http://localhost:3000/diary/' + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3000/diary/' + data._id, {
      method: 'DELETE'
    }).then(() => {
      history('/');
    }) 
  }

  return (
    <div>
      { error && <div>{ error }</div> }
      { data && (
        <article className="singleDay">
          <h2>{ data.date }</h2><br />
          <div className="bodyDiv">{ data.body }</div>
          <button className="backbtn" onClick={()=>(history('/'))}>Back</button>
          
          <button id="deleteBtn" onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default Day;