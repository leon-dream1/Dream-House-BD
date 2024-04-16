import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Properties from "../../components/Properties/Properties";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dream House BD | Choose Your Dream with Us | Home</title>
      </Helmet>
      <Banner />
      <Properties />
    </div>
  );
};

export default Home;
