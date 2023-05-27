import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DiaryList = ({data}) => {

    const rData=[...data].reverse();//reverse the data 

  return (
    <div className="diaryList">
    {rData.length==0?<h2>Start writing your Diary</h2>:""}
        
      {rData.map((d)=>(
        <div className="diaryList" key={d._id}>
            <NavLink id="navLink" to={`/${d._id}`}>
                <h2>{d.date}</h2>
            </NavLink>
        </div>
      ))}
    </div>
  )
}

export default DiaryList
