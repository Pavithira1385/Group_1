import React from "react";

//my one
import Homenav from "components/Navbars/Homenav";
import Homeinfo from "components/Body/Homeinfo";
import Rateinfo from "components/Body/Rentinfo";
import { Container } from "reactstrap";
import RentNav from 'components/Navbars/RentNav';
import Hotelinfo from 'components/Body/Hotelinfo';

function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      
      <div className="filter">
       
      <RentNav />
     
     <Rateinfo />
     <Hotelinfo/>
      </div>
    </>
  );
}

export default Home;
