import DiaryList from "./DiaryList"
import useFetch from "./useFetch"

const Diary = () => {

    const {data,error}=useFetch("http://localhost:3000/diary");


  return (
    <div className="diary">
        {error && <h2>{error}</h2>}
        {data && <DiaryList data={data}/>}
    </div>
  )
}

export default Diary
