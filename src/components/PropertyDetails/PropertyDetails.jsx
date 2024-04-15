import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  // const [selectedProperty, setSelectedProperty]
  const data = useLoaderData();

  const { id } = useParams();
  const selectedProperty = data.find((property) => property.id == id);
  //    setSelectedProperty
  console.log("selected", selectedProperty);
  return (
    <div className="container mx-auto mt-[100px]">
      <div className="grid grid-cols-2 gap-6 items-center">
        <div>
          <img src={selectedProperty.image} alt="" className="rounded-lg" />
        </div>
        <div className="p-4">
          <h4 className="text-[28px] text-[#131313] font-montserrat font-semibold">
            {selectedProperty.estate_title}
          </h4>
          <h6 className="text-[14px] text-blue-400 font-merriweather">
            {/* eslint-disable-next-line react/prop-types */}
            {selectedProperty.description}
          </h6>
          <div className="flex space-x-5 mt-4">
            <p className="text-[18px] bg-blue-500 text-white px-3 py-1 rounded-md">
              {selectedProperty.segment_name}
            </p>
            <p className="text-[18px] bg-red-700 text-white px-3 py-1 rounded-md">
              {selectedProperty.status}
            </p>
          </div>
          <div className="border-b border-t border-blue-500 mt-5 p-5">
            <p className="text-[18px] text-[#131313] font-merriweather">
              Area: {selectedProperty.area}
            </p>
            <p className="text-[18px] text-[#131313] font-merriweather">
              Location: {selectedProperty.location}
            </p>
            <div className="mt-4">
              {/* eslint-disable-next-line react/prop-types */}
              {selectedProperty.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </div>
            <div>
              <p className="text-[25px] font-merriweather text-blue-700 mt-4">
                {selectedProperty.price}
              </p>
            </div>
            <button
              className="bg-[#425CEC] w-full text-white text-[18px] font-merriweather font-semibold px-[35px] py-[10px] rounded-lg mt-6"
            >
              Add to Bookmark this property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
