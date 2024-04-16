import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);
  // const latitude = 51.505;
  const latitude = 23.6429;
  // const longitude = -0.09;
  const longitude = 90.4883;
  return (
    <div className="mt-[50px]">
      <h1 className="text-[22px] text-center text-blue-500 font-merriweather mb-4">
        Find Your Location
      </h1>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        ref={mapRef}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
