
import Featured from "../../commone/featured/Featured";
import FeaturedProperties from "../../commone/featuredProperties/FeaturedProperties";
import Footer from "../../commone/footer/Footer";
import Navbar from "../../commone/navbar/Navbar"
import PropertyList from "../../commone/propertyList/PropertyList";
import HeaderHotel from "./headerHotel/HeaderHotel";
import "./hotel.css";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <HeaderHotel/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Parcourir par type de propriété</h1>
        <PropertyList/>
        <h1 className="homeTitle"  id="body">Les clients ont adoré les maisons</h1>
        <FeaturedProperties/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
