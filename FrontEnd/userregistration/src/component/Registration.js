import pic from './RoadNew.jpg'
export default function Registration()
{
    return(
        <>
        <div className="main">
            <div className="nav">
                <nav></nav>
            </div>
        </div>

        <div className="imageform">
            <div className="image">
                <img src={pic} alt='picture' id='pic1'></img>
            </div>

            <div className="form">
                <h3 className="joinin">Join In</h3>
                <p className="account">Already Have An Account? <a href="#" class="signin"></a></p>


                <form>
                    <label className="labname">Name</label>
                    <div className="namediv">
                        <div className="name">
                            <label className="fnamelab">FirstName</label>
                            <label className="lnamelab">LastName</label>

                        </div>

                        <div className="nameinput">
                            <input type="text" placeholder="Adam" class="fnametype" id="type01"></input><br></br>
                            <input type="text" placeholder="Smith" class="lnametype" id="type01"></input>
                            
                        </div>
                    </div><br></br>

                    <label className="email">Email</label>
                    <input type="email" placeholder="example@gmail.com" class="emailtype"></input><br></br>

                    <label class="ContactNo">Contact Number</label><br></br>
                    <div className='ContactInfo'>

                     <input type="text"  placeholder="Area Code" class="areacode"></input>
                     <input type="text" placeholder="Phone Number" class="phNo"></input><br></br>
                    </div>
                </form>

            </div>

        </div>

        
        
        
        
        </>
    )
}