
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import Homenav from 'components/Navbars/Homenav';
function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-nude section-nucleo-icons">
        <Container>
            <h1>Vehicle Renting Terms And Conditions</h1>
          <h4>
            <br></br>
            1.	Order of Recommendations:
        </h4>
        <h6>
        Our service provides recommendations for the order in which tourists may consider visiting various attractions based on their preferences and interests.
        </h6>
        <h4>
            <br></br>
           2.	Preference-Based Suggestions
        </h4>
        <h6>
        Recommendations are tailored to tourists' preferences, such as historical sites, cultural attractions, natural landmarks, or recreational activities, as indicated by the tourists themselves. </h6>
            
        <h4>
            <br></br>
            3.	Flexibility
        </h4>
        <h6>Tourists have the flexibility to adjust the suggested order of places to visit according to their preferences, schedule, and other factors that may influence their travel plans.
             </h6>
             <h4>
            <br></br>
            4.	Availability and Accessibility
        </h4>
        <h6> While we strive to provide accurate and up-to-date recommendations, tourists should verify the availability and accessibility of attractions, including opening hours, admission fees, and any special events or closures that may affect their visit.
             </h6>
             <h4>
            <br></br>
            4.	Availability and Accessibility
        </h4>
        <h6> While we strive to provide accurate and up-to-date recommendations, tourists should verify the availability and accessibility of attractions, including opening hours, admission fees, and any special events or closures that may affect their visit.
             </h6>
             <h4>
            <br></br>
            5.	Distance and Travel Time
        </h4>
        <h6> Considerations are given to the distance between attractions and the estimated travel time between them. Tourists should plan their itinerary accordingly to optimize their time and minimize travel fatigue.
             </h6>
             <h4>
            <br></br>
            6.	Local Conditions
        </h4>
        <h6> Tourists should be aware of local conditions, such as traffic congestion, weather conditions, or seasonal factors, that may impact the feasibility of following the recommended order of places to visit.
             </h6>
             <h4>
            <br></br>
            7.	Feedback and Adjustments
        </h4>
        <h6> Tourists are encouraged to provide feedback on the recommended itinerary and suggest any adjustments or preferences they may have. This helps improve the accuracy and relevance of future recommendations for other users.
             </h6>
             <h4>
            <br></br>
            8.	Alternate Routes and Options
        </h4>
        <h6> In case of unexpected changes or preferences, tourists should explore alternative routes or options for visiting attractions, taking into account their interests and available resources.
             </h6>
             <h4>
            <br></br>
            9.	Safety Considerations
        </h4>
        <h6> While we aim to prioritize safety in our recommendations, tourists should exercise caution and be aware of their surroundings when visiting attractions, especially in unfamiliar or remote areas.
             </h6>
             <h4>
            <br></br>
            10.	Legal Compliance
        </h4>
        <h6> Tourists are responsible for complying with local laws, regulations, and restrictions while visiting attractions recommended by our service, including any rules or guidelines specific to individual sites.
             </h6>
             <h4>
            <br></br>
            Navigation Disclaimer:
        </h4>
        <h6>  While our service offers recommendations for the order in which tourists may consider visiting various attractions based on their preferences, it's important to note that the automated maps provided are for guidance purposes only. Tourists are responsible for their own navigation and should exercise caution when following directions.
             </h6>
             <h4>
            <br></br>
            1.	Driving Permit Requirements
        </h4>
        <h6> Tourists must present a valid international driving permit (IDP) along with their original driver's license to rent a vehicle in Sri Lanka, in accordance with Sri Lankan traffic regulations.
             </h6>
             <h4>
            <br></br>
            2.	Minimum Age Requirement
        </h4>
        <h6> The minimum age for renting vehicles is 18 years old, ensuring compliance with local regulations and insurance policies
             </h6>
             <h4>
            <br></br>
            3.	Insurance Coverage
        </h4>
        <h6> Comprehensive insurance coverage, including third-party liability insurance and collision damage waiver (CDW), is provided for rented vehicles to protect tourists in case of accidents or damages.
             </h6>
             <h4>
            <br></br>
            4.	Security Deposit
        </h4>
        <h6>  Tourists are required to provide a refundable security deposit, either in cash or as a pre-authorization on their credit card, to cover any potential damages or losses to the vehicle during the rental period.
             </h6>
             <h4>
            <br></br>
            5.	Vehicle Condition and Inspection
        </h4>
        <h6>  A thorough inspection of the vehicle is conducted with the tourist before and after the rental period to document any existing damages or issues, ensuring transparency and accountability.
             </h6>
             <h4>
            <br></br>
            6.	Road Safety Awareness
        </h4>
        <h6>  Tourists are provided with information on Sri Lanka's traffic laws, road conditions, and driving customs to promote safe driving practices and awareness of potential hazards.
             </h6>
             <h4>
            <br></br>
            7.	Emergency Assistance
        </h4>
        <h6> Emergency contact information is provided to tourists, along with instructions on what to do in case of accidents, breakdowns, or other emergencies. Roadside assistance and support services are readily available to assist tourists in need.
             </h6>
             <h4>
            <br></br>
            8.	Fuel Policy
        </h4>
        <h6>   Clear instructions are provided regarding the vehicle's fuel policy, whether it should be returned with a full tank of fuel or if fuel charges will be applied based on the level of fuel at the time of return.
             </h6>
             <h4>
            <br></br>
            9.	Environmental Considerations: 
        </h4>
        <h6>  Tourists are encouraged to respect the environment and local communities by disposing of waste responsibly and avoiding off-road driving in protected areas or sensitive habitats.
             </h6>
             <h4>
            <br></br>
            10.	Cultural Sensitivity
        </h4>
        <h6>   Tourists are reminded to drive respectfully and responsibly, especially when visiting cultural or religious sites, and to observe local customs and traditions.
             </h6>
            <br></br>
            <Button
                className="btn-round ml-1"
                color="danger"
                align="center"
                href="/Rent"
                outline
                target=""
              >
                Decline
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                align="center"
                href="/Rentform"
                outline
                target=""
              >
                Accept 
              </Button>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
