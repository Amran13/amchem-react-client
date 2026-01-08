import CareerOpportunities from "../../components/CareerOpportunities";
import CompanyOverview from "../../components/CompanyOverview";
import Milestone from "../../components/Milestone";
import ProductionOperators from "../../components/ProductOperators";
import ProfessionalPositions from "../../components/ProfessionalPositions";
import Vision from "../../components/Vision";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";


export default function About() {
  return (
    <div>
        <CompanyOverview></CompanyOverview>
        <Vision></Vision>
        <WhatMakesUsDifferent></WhatMakesUsDifferent>
        <Milestone></Milestone>
        <CareerOpportunities></CareerOpportunities>
        <ProfessionalPositions></ProfessionalPositions>
<ProductionOperators></ProductionOperators>
    </div>
  );
}