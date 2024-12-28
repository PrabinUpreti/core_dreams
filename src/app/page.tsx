import Carousel from "./LandingPageComponents/Carousel";
import Customers from "./LandingPageComponents/Customers";
import Data from "./LandingPageComponents/Data";
import DesignFooter from "./LandingPageComponents/DesignFooter";
import Footer from "./common/Footer";
import ManageCommunity from "./LandingPageComponents/ManageCommunity";
import OurClients from "./LandingPageComponents/OurClients";
import Pixelgrade from "./LandingPageComponents/Pixelgrade";

export default function Home() {
  return (
    <main>
      <Carousel />
      <OurClients />
      <ManageCommunity />
      <Pixelgrade />
      <Data />
      <DesignFooter />
      <Customers />
      <Footer />
    </main>
  );
}
