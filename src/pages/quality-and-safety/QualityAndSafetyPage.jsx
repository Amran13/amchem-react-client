import AntimicrobialStewardship from "../../components/AntimicrobialStewardship";
import EnvironmentalResponsibility from "../../components/EnvironmentalResponsibility";
import GoodManufacturingPractices from "../../components/GoodManufacturingPractices";
import ProductSafety from "../../components/ProductSafety";
import QualityManagement from "../../components/QualityManagement";

export default function QualityAndSafetyPage() {
  return (
    <div>
        <QualityManagement></QualityManagement>
        <GoodManufacturingPractices></GoodManufacturingPractices>
        <ProductSafety></ProductSafety>
        <AntimicrobialStewardship></AntimicrobialStewardship>
        <EnvironmentalResponsibility></EnvironmentalResponsibility>
    </div>
  );
}