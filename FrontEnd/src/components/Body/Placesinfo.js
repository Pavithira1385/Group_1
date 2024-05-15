
import React from "react";
import axios from "axios";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import Homenav from 'components/Navbars/Homenav';
import { useState ,useEffect} from "react";

function SectionNucleoIcons() {
    const [items, setItems] = useState([]);
const [submissionSuccess,setSubmissionSuccess]=useState(false);
const [fetchedItems, setFetchedItems] = useState([]);
  // Function to add an item to the array
  const addItem = (value) => {
    // Create a new array with the existing items plus the new value
    const newItems = [...items, value];
    // Update the state with the new array of items
    alert('New Item Added');
    setItems(newItems);
  };
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/places', {
       item:[items]
      });
      setSubmissionSuccess(true);
      // Reset rating after submission
      setItems([]); // Clear suggestions input after submission
      alert('Suggestion submitted successfully');
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      alert('Failed to submit suggestion. Please try again.');
    }
  };
  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/places');
      console.log('Fetched items:', response.data); // Log the fetched items
      setFetchedItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error); // Log any errors
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/places', { items });
      console.log('Response:', response.data);
      setSubmissionSuccess(true);
      setItems([]); // Clear items after submission
      alert('Suggestion submitted successfully');
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      alert('Failed to submit suggestion. Please try again.');
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/places');
      console.log('Fetched items:', response.data);
      setFetchedItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <div className="section section-nude section-nucleo-icons">
        <Container>
          <Row>
            <h2>Choose Your Travelling Destinations</h2>
          <h5>
          <br></br>
            <br></br>
            <br></br>
        We are giving you thr best travelling experience all around the country Choose your 
        Destination and travel around the Sri lanka . In Sri lanka we have many travelling destinations 
        acording to your preference. Mountains,Beaches,Historical Places and So on.
        </h5>
            <Col lg="4" md="12">
              <h3 className="title">Sigiriya</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/im4.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Sigiriya`)}
                outline
                target="_blank"
              >
                Select 
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Galle</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/galle.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                align="center"
                onClick={() => addItem(`Galle`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Ella</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/Ella.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Ella`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Dambulla</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/dabulla.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Dambulla`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Arugambay</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/aru.jpeg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Arugambay`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Yala</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/yala.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Yala`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Pinnawala</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/pinna.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Pinnawala`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Lakshapana</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/laksha.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Lakshapana`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Pidurangala</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/pidura.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Pidurangala`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Mirissa</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/mirissa.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Mirissa`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Kandy</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/kandy.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Kandy`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Ambuluwawa</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/ambu.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Ambuluwawa`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Nallur</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/nallu.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Nallur`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Vilpaththu</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/wil.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Vilpaththu`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Temple of Tooth</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/tooth.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Tmple of Tooth`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h3 className="title">Point pedro</h3>
              <br />
              <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/point.jpg")}
                />
              <br />
              <Button
                className="btn-round ml-1"
                color="danger"
                onClick={() => addItem(`Point Pedro`)}
                outline
                target="_blank"
              >
                Select
              </Button>
            </Col>
            <br></br>
          </Row>
          <div>
      <h1>Travelling Destinations you are selected</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}><h4>{item}</h4></li>
        ))}
      </ul>
      <br></br>
      <h3>We are Ready to provide guidence to visit above places according to your vaccation and budget.If you want to get Travelling plane 
        Click Here.
      </h3>
      <br></br>
      <Button
                className="btn-round ml-1"
                color="danger"
                outline
                href="/Mapping"
                target="_blank"
               
                onClick={handleSubmit}
              >
                Get Traveling plane
              </Button>
    </div>
    
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
