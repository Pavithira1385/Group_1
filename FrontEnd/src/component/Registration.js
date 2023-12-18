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
          

            

          </form>
        </div>
    </div>
    
    </div>
   
    </>

  );
}