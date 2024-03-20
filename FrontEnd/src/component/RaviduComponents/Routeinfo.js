import './Route.css';
import im1 from '../image/im2.jpg';
import im2 from '../image/im3.jpg';
import im3 from '../image/im4.jpg';
export default function Routeinfo()
{
    return(
        <div class="main">
            <h2>We are happy to Konw your Preferences</h2>
            <p>Welcome all travellers to sri lanka and in this section we are hope to gather some of your information.This information will be use for 
                generate the yuour travelling plan.we are asure that this data will not be use for other purposes and we are secure your data as well as.
            </p>
            <div class="data">
            <form id="info">
                <h3>Preferances</h3>
                <label>Number of days : </label>
                <input type='number' name="day" placeholder="Enter number of days your tavelling"></input><br></br><br></br>
                <label>Expected travel mod : </label>
                <select name="tmod" id="tmods">
                    <option value="Ranted vehicle">Ranted vehicle</option>
                    <option value="Public transport">Public transport</option>
                    <option value="Travel agent">Travel agent</option>
                </select><br></br><br></br>
                <label>Travelling purpose : </label>
                <select name="purpose" id="pupo">
                    <option value="Relaxing">Relaxing</option>
                    <option value="Hiking">Hiking</option>
                    <option value="Gain konwladge">Gain konwladge</option>
                    <option value="surfing">surfing</option>
                    <option value="All">All</option>
                </select><br></br><br></br>
                <label>Budget Rang : </label>
                <select name="budget" id="budgets">
                    <option value="Low">Low</option>
                    <option value="Middle">Middle</option>
                    <option value="Highe">Highe</option>
                </select><br></br><br></br>
                <label>Type of tour</label>
                <select name="type" id="types">
                    <option value="Solo">Solo</option>
                    <option value="Couple">Couple</option>
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                </select><br></br><br></br>
                <label>accomedation mod</label>
                <select name="acco" id="accom">
                    <option value="Hotels">Hotels</option>
                    <option value="Lodges">Lodges</option>
                    <option value="Cabana">Cabana</option>
                    <option value="villa">Villa</option>
                </select><br></br><br></br>
                <input type='button' value="Reset" id='reset'></input>
                <input type='button' value="Serch" id='serch'></input>
                
            </form>
            </div>
            <h2>select your destinations</h2> 
            <div class='choice'>
                <div id='pic-box'>
                   
                    <div class='info'>
                        <label>Nine Archs</label>
                    <input type='checkbox' name='check' class='checkround'></input>
                    </div>
                    <img src={im2}></img>

                </div>
                <div id='pic-box'>
                <div class='info'>
                        <label>Mirissa</label>
                    <input type='checkbox' name='check' class='checkround'></input>
                    </div>
                    <img src={im1}></img>
                </div>
                <div id='pic-box'>
                <div class='info'>
                        <label>Sigiriya</label>
                    <input type='checkbox' name='check' class='checkround'></input>
                    </div>
                    <img src={im3}></img>
                </div>
                <div id='pic-box'>
                <div class='info'>
                        <label>Nine Archs</label>
                    <input type='checkbox' name='check' class='checkround'></input>
                    </div>
                    <img src={im2}></img>
                </div>
            </div>
           
        </div>
    )
}