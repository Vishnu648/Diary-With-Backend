import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Create from './Create'
import Diary from './Diary'
import Day from './Day'
import NotFountd from './NotFountd'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <div className="contents">
            <Routes>
              <Route exact path="/" element={<Diary/>}/>
              <Route exact path="/create" element={<Create/>}/>
              <Route exact path="/:id" element={<Day/>}/>
              <Route exact path="*" element={<NotFountd/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
