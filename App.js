/*import logo from './logo.svg';
import './App.css';
import Navbar from "./common/Navbar/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    
    </>
  );
}

export default App;
*/

import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom"
import About from "./components/About/About"
import Gallery from "./components/gallery/Gallery"
// import Destinations from './components/Destinations/'
import SinglePages from './SinglePage/SinglePages'
import Blog from "./components/Blog/Blog"
import BlogSingle from "./components/Blog/Blog single page/BlogSingle"
import Testimonial from "./components/Testimonial/Testimonial"
import Contact from "./components/Contact/Contact"
import Login from "./components/Login/Login"
import Register from "./components/Login/Register"
function App()
{
  return(
    <>
    <Router>
      { <Navbar/> }
      {/* <Switch> */}
        <Route path='/'exact components = {Home}></Route>
        <Route path='/about'exact components = {About}></Route>
        <Route path='/gallery'exact components = {Gallery}></Route>
        {/* { <Route path='/destination'exact components = {Destinations}></Route>} */}
        <Route path='/singlepage/:id'exact components = {SinglePages}></Route>
        <Route path='/blog'exact components = {Blog}></Route>
        <Route path='/blogsingle/:id'exact components = {BlogSingle}></Route>
        <Route path='/testimonial'exact components = {Testimonial}></Route>
        <Route path='/contact'exact components = {Contact}></Route>
        <Route path='/login'exact components = {Login}></Route>
        <Route path='/register'exact components = {Register}></Route>

      {/* </Switch> */}
    </Router>
    <p>Hiiii</p>
    </>
  )
}

export default App;
