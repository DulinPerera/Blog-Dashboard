import { BrowserRouter,Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Dashborad from "./pages/Dashborad"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashborad/>}/>
        </Route>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
