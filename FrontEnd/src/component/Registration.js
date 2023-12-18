import pic from './RoadNew.jpg'
export default function Registration()
{
  return(
    <>
    <div className="main">
      <div class="nav">
      <nav></nav>
      </div>
      
        <div className="imgform">
          
            <div class="image1"> 
            <img src={pic} alt = 'picture' id='p01'></img>
             </div>

         <div class="form">
          <h3 className="joinin">Join In</h3>
          <p className="alreadyhave">Already have an account?<a href="#" class="signin">Sign In</a></p>
          
          <form>
          <label className="labName">Name</label>

          <div className='Namediv'>
            <div class="name">
            <label class="fNameLab">FirstName</label><br></br>
            <label class="lNameLab">LastName</label>
            </div>


           <div class="nameinput">
             <input type="text"  placeholder="Adam" class="fnameType" id='t01'></input><br></br>
            <input type="text"  placeholder="Smith" class="lnameType" id ='t01'></input>
           </div>
          
            </div>
            
             <br></br>
             
            <label className="email">Email</label>
            <input type="email" placeholder="example@gmail.com" class="emailtype"></input><br></br>

            <label class="ConNo">Contact Number</label><br></br>
            <div className='ContactInfo'>

            <input type="text"  placeholder="Area Code" class="areacode"></input>
            <input type="text" placeholder="Phone Number" class="phNo"></input><br></br>
            </div>


            <label className='Country'>Country</label>
            <input type='text' placeholder='Country' className='Countrytype'></input>

            <label class="PassportNo">Passport Number</label>
            <input type="text" class="passporttype" placeholder='PassportNumber'></input>
        
          <label class="password">Password</label>
          <input type="password" placeholder="@*$#" class="passwordtype"></input><br></br>
          <label class="confirm">Confirm Password </label><br></br>
          <input type="password" placeholder="@*$#" class="confirmtype"></input>
          <br></br><br></br>
          <input type="button" value="Join Now" class="joinnow"></input>
          

            

          </form>
        </div>
    </div>
    
    </div>
   
    </>

  );
}