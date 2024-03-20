import {Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './Start.css'
export default function Start()
{
    return(
        <>
        <div class="navbar">
        <ul>
          <li> <Link to='/sign'><p>SignUp</p></Link></li>
          <li><Link to='/log'><p>Login</p></Link></li>
        </ul>
      
        
     
     </div>
      
    
      <Routes>
        <Route path='/sign' element={<Home></Home>}></Route>
        <Route path='/log' element={<Login></Login>}></Route>
      </Routes>
        </>
    )
}