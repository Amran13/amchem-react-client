import Banner from "../../components/Banner";
import Commitment from "../../components/Commitment";
import OurCoreProducts from "../../components/OurCoreProducts";
import OurCoreValues from "../../components/OurCoreValues";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";

export default function HOme() {
  return (
    <div>
        <Banner></Banner>
        <div className="bg-white">
          <OurCoreProducts></OurCoreProducts>
        </div>
        <OurCoreValues></OurCoreValues>
        <div className="bg-white">
          <Commitment></Commitment>
        </div>
        <WhatMakesUsDifferent></WhatMakesUsDifferent>
    </div>
  );
}


