import Banner from "../../components/Banner";
import Commitment from "../../components/Commitment";
import OurCoreProducts from "../../components/OurCoreProducts";
import OurCoreValues from "../../components/OurCoreValues";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";

export default function HOme() {
  return (
    <div>
        <Banner></Banner>
        <OurCoreProducts></OurCoreProducts>
        <OurCoreValues></OurCoreValues>
        <Commitment></Commitment>
        <WhatMakesUsDifferent></WhatMakesUsDifferent>
    </div>
  );
}


