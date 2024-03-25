import { useState } from 'react'
import './user.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateUser from './UpdateUser'
import Users from './Users'
import CreateUser from './CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App
