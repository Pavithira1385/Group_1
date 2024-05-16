import React from "react";


import Rateinfo from "components/Body/Rentinfo";
import RentNav from 'components/Navbars/RentNav';
import Termsinfo from 'components/Body/TermsInfo';

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
     
     <Termsinfo/>
      </div>
    </>
  );
}

export default Home;
