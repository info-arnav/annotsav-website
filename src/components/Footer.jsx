import { NavLink } from "react-router-dom";
import PlaystoreTransparent from "../assets/images/PlaystoreTransparent.png"
import AppStoreTransparent from "../assets/images/AppStoreTransparent.png"
import logo from "../assets/images/logo.png"
import LocationMarkerTransparent from "../assets/images/LocationMarkerTransparent.png"
import PhoneTransparent from "../assets/images/PhoneTransparent.png"
import MailTransparent from "../assets/images/MailTransparent.png"


function Footer() {
  return (
    <section className="-mt-20">
      <h1 className="font-montserrat font-bold text-8xl text-center mt-[10%] pb-[10%]">
        LET'S CELEBRATE
        <br />
        <div className="text-primaryColor-1">ANN-OTSAV</div>
      </h1>
      <div className="flex bg-primaryColor-5 pb-[5%]">
        <div className="inline-grid grid-cols-2 text-white pl-[13%] py-[5%]">
          <div className="col-span-2 font-montserrat font-bold pb-[20%]">
            QUICK LINKS
          </div>
          <NavLink className="font-raleway font-sm font-light py-[12%]" to={"/"}>Home</NavLink>
          <NavLink className="font-raleway font-sm font-light pl-[23%] py-[12%]" to={"/organisation"}>
            Organisation
          </NavLink>
          <NavLink className="font-raleway font-sm font-light py-[12%]" to={"contact"}>Contact Us</NavLink>
          <NavLink className="font-raleway font-sm font-light pl-[23%] py-[12%]" to={'/volunteer'}>
            Volunteer
          </NavLink>
          <NavLink className="font-raleway font-sm font-light py-[12%]">Survey</NavLink>
          <NavLink className="font-raleway font-sm font-light pl-[23%] py-[12%]" to={'/contact'}>
            Reach Us
          </NavLink>
        </div>
        <div className="inline-grid grid-cols-1 text-white pl-[13%] py-[5%] gap-[25%]">
          <div className="font-montserrat font-bold text-center">
            DOWNLOAD APP
          </div>
          <NavLink to="/">
            <img
              src={PlaystoreTransparent}
              className="max-h-12"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src={AppStoreTransparent}
              className="max-h-12"
            />
          </NavLink>
        </div>
        <div className="inline-grid grid-cols-1 text-white pl-[13%] py-[4%] max-w-[28%]">
          <img src={logo} className="h-14" />
          <a className="font-raleway font-thin pt-[15%] pb-[7%]" href="https://shorturl.at/8ezHS" target="_blank">
            <img
              src={LocationMarkerTransparent}
              className="h-6 inline pr-2"
            />
            <span className="font-semibold">Netaji Subhas University of Technology</span>, Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
          </a>
          <div className=" font-thin pb-[7%]">
            <img
              src={PhoneTransparent}
              className="h-6 inline pr-2"
            />
           +91 85956 22774
          </div>
          <div className="font-raleway font-thin pb-[7%]">
            <img
              src={MailTransparent}
              className="h-5 inline pr-2"
            />
           enactus@nsut.ac.in
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
