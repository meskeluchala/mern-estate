import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/profile'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Header from './components/Header'

export default function App() {
  return( 
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Sign-in' element={<SignIn />}/>
        <Route path='/Sign-up' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    )
 
}