import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './Signin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
