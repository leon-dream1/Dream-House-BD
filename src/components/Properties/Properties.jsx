import { useEffect, useState } from "react";
import Property from "../Property/Property";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="my-[100px]">
      <h2 className="text-[30px] text-center text-blue-700 font-merriweather">
        Top Properties
      </h2>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-4 gap-6">
          {properties.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
