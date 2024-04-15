import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Property = ({ property }) => {
  const navigate =  useNavigate();
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    id,
    // eslint-disable-next-line react/prop-types
    estate_title,
    // eslint-disable-next-line react/prop-types
    image,
    // eslint-disable-next-line react/prop-types
    description,
    // eslint-disable-next-line react/prop-types
    segment_name,
    // eslint-disable-next-line react/prop-types
    status,
    // eslint-disable-next-line react/prop-types
    area,
    // eslint-disable-next-line react/prop-types
    location,
    // eslint-disable-next-line react/prop-types
    price,
    // eslint-disable-next-line react/prop-types
    facilities,
    // eslint-disable-next-line react/prop-types
    button_text,
  } = property;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={estate_title} />
      </figure>
      <div className="p-4">
        <h4 className="text-[28px] text-[#131313] font-montserrat font-semibold">
          {estate_title}
        </h4>
        <h6 className="text-[14px] text-blue-400 font-merriweather">
           {/* eslint-disable-next-line react/prop-types */}
          {description.slice(0,80)}....
        </h6>
        <div className="flex space-x-5 mt-4">
          <p className="text-[18px] bg-blue-500 text-white px-3 py-1 rounded-md">
            {segment_name}
          </p>
          <p className="text-[18px] bg-red-700 text-white px-3 py-1 rounded-md">
            {status}
          </p>
        </div>
        <div className="border-b border-t border-blue-500 mt-5 p-5">
          <p className="text-[18px] text-[#131313] font-merriweather">
            Area: {area}
          </p>
          <p className="text-[18px] text-[#131313] font-merriweather">
            Location: {location}
          </p>
          <div className="mt-4">
            {/* eslint-disable-next-line react/prop-types */}
            {facilities.slice(0, 2).map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}....
          </div>
          <div>
            <p className="text-[25px] font-merriweather text-blue-700 mt-4">
              {price}
            </p>
          </div>
        </div>
        <button
        onClick={() => navigate(`/property/${id}`)}
         className="bg-[#425CEC] w-full text-white text-[18px] font-merriweather font-semibold px-[35px] py-[10px] rounded-lg mt-6">
          {button_text}
        </button>
      </div>
    </div>
  );
};

export default Property;
