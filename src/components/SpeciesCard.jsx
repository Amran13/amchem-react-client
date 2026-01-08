import { Link } from "react-router-dom";

export default function SpeciesCard({ name }) {
  return (
    <Link
      to={`/products/species/${name}`}
      className="group  rounded-xl   gap-6 px-6 transition-all duration-300 hover:scale-105 hover:border-[#663C2B] hover:border-3"
    >
      <img
        src={`/${name}.png`}
        width="220"
        height="220"
        alt="species"
      />
    </Link>
  );
}
