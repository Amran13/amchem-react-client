import DistributorApplication from "../../components/DistributorApplication";
import DistributorRequirement from "../../components/DistributorRequirement";
import RegistrationProcess from "../../components/RegistrationProcess";
import WhyDistributeWithUs from "../../components/WhyDistributeWithUs";

export default function DistributeWithUsPage() {
  return (
    <div>
<WhyDistributeWithUs></WhyDistributeWithUs>
<DistributorRequirement></DistributorRequirement>
<RegistrationProcess></RegistrationProcess>
<DistributorApplication></DistributorApplication>
    </div>
  );
}