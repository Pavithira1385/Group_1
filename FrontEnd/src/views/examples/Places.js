import React from "react";

//my one


import { Container } from "reactstrap";
import RentNav from 'components/Navbars/RentNav';
import Placesinfo from 'components/Body/Placesinfo';

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
     
     <Placesinfo/>
      </div>
    </>
  );
}

export default Home;