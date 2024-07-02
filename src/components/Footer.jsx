import { NavLink } from "react-router-dom";
import PlaystoreTransparent from "../assets/images/PlaystoreTransparent.png"
import AppStoreTransparent from "../assets/images/AppStoreTransparent.png"
import logo from "../assets/images/logo.png"
import LocationMarkerTransparent from "../assets/images/LocationMarkerTransparent.png"
import PhoneTransparent from "../assets/images/PhoneTransparent.png"
import MailTransparent from "../assets/images/MailTransparent.png"



// function Footer() {
//   return (
//     <section className="-mt-20 ">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
//       <h1 className="font-montserrat font-bold text-8xl text-center mt-[10%] pb-[10%]">
//         LET'S CELEBRATE
//         <br />
//         <div className="text-primaryColor-1">ANN-OTSAV</div>
//       </h1>
//       <div className="flex bg-primaryColor-5 pb-[5%] ">
//       <img src={logo} className="h-14 w-100" />
//         <div className="inline-grid grid-cols-2 text-white pl-[13%] py-[5%]">
//           <div className="col-span-2 font-montserrat font-bold pb-[20%]">
//             QUICK LINKS
//           </div>
//           <NavLink className="font-raleway font-sm font-light py-[12%] opacity-60 hover:opacity-100" to={"/"}>Home</NavLink>
//           <NavLink className="font-raleway font-sm font-light pl-[23%] py-[12%] opacity-60 hover:opacity-100" to={"/organisation"}>
//             Organisation
//           </NavLink>
//           <NavLink className="font-raleway font-sm font-light py-[12%] opacity-60 hover:opacity-100" to={"contact"}>Contact Us</NavLink>
//           <NavLink className="font-raleway font-sm font-light pl-[23%] py-[12%] opacity-60 hover:opacity-100" to={'/volunteer'}>
//             Volunteer
//           </NavLink>
//           <NavLink className="font-raleway font-sm font-light py-[12%] opacity-60 hover:opacity-100">Survey</NavLink>
//           <NavLink className="font-raleway font-sm font-light pl-[23%] py-[12%] opacity-60 hover:opacity-100" to={'/contact'}>
//             Reach Us
//           </NavLink>
//         </div>
//         <div className="inline-grid grid-cols-1 text-white pl-[13%] py-[5%] gap-[25%]">
//           <div className="font-montserrat font-bold text-center">
//             DOWNLOAD APP
//           </div>
//           <NavLink to="/">
//             <img
//               src={PlaystoreTransparent}
//               className="max-h-12 shadow-sm hover:shadow-white rounded-lg"
//             />
//           </NavLink>
//           <NavLink to="/">
//             <img
//               src={AppStoreTransparent}
//               className="max-h-12 shadow-sm hover:shadow-white rounded-lg"
//             />
//           </NavLink>
//         </div>
//         <div className="inline-grid grid-cols-1 text-white pl-[13%] py-[4%] max-w-[28%]">
          
//           <a className="font-raleway font-thin pt-[15%] pb-[7%]" href="https://shorturl.at/8ezHS" target="_blank">
//             <img
//               src={LocationMarkerTransparent}
//               className="h-6 inline pr-2 "
//             />
//             <span className="font-semibold opacity-60 hover:opacity-100">Netaji Subhas University of Technology</span>, Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
//           </a>
//           <div className=" font-thin pb-[7%]">
//             <img
//               src={PhoneTransparent}
//               className="h-6 inline pr-2"
//             />
//            +91 85956 22774
//           </div>
//           <div className="font-raleway font-thin pb-[7%]">
//             <img
//               src={MailTransparent}
//               className="h-5 inline pr-2"
//             />
//            enactus@nsut.ac.in
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <section className="-mt-20 ">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <hr className="w-[1300px] relative left-[200px] top-[950px] max-sm:w-[23rem] max-sm:top-[490px] max-sm:left-[70px]"></hr>
      <p className="text-xs text-white font-thin text-center relative top-[955px] max-sm:top-[500px] max-sm:text-[10px]">© 2024 copyright. All rights reserved.</p>
      <br></br>
      <h1 className="font-montserrat font-bold text-8xl text-center mt-[10%] pb-[10%] max-sm:text-5xl">
        LET'S CELEBRATE
        <br />
        <div className="text-primaryColor-1">ANN-OTSAV</div>
      </h1>
      <div className="flex bg-primaryColor-5 pb-[5%] ">
      <img src={logo} className="h-14 w-100 relative top-[75px] left-[200px] max-sm:left-[50px] max-sm:top-[20px]" />
        <div className="inline-grid grid-cols-1 text-white pl-[13%] py-[5%] gap-[25%]">
          <div className="font-montserrat font-bold text-center relative max-sm:right-[107px] max-sm: top-[60px] max-sm:text-[10px]">
            DOWNLOAD APP
          </div>
          <NavLink to="/" >
            <img
              src={PlaystoreTransparent}
              className="max-h-12 shadow-sm hover:shadow-white rounded-lg max-sm:h-7 relative max-sm:right-[107px] max-sm:top-[10px]"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src={AppStoreTransparent}
              className="max-h-12 shadow-sm hover:shadow-white rounded-lg max-sm:h-7 relative max-sm:right-[107px] max-sm:bottom-[40px]"
            />
          </NavLink>
        </div>
        <div className="inline-grid grid-cols-1 text-white pl-[10%] py-[4%] max-w-[50%] relative max-sm:right-[90px] max-sm:text-100" >
          
          <a className="font-raleway font-thin pt-[15%] pb-[7%]" href="https://shorturl.at/8ezHS" target="_blank">
            <img
              src={LocationMarkerTransparent}
              className="h-6 inline pr-2 "
            />
            <span className="font-semibold opacity-60 hover:opacity-100 inline max-sm:text-[13px] ">Netaji Subhas University of Technology</span>,<p className="inline max-sm:text-[13px]"> Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078</p>
          </a>
          <div className=" font-thin pb-[7%]">
            <img
              src={PhoneTransparent}
              className="h-6 inline pr-2 max-sm:h-4"
            />
           <p className="inline max-sm:text-[13px]">+91 85956 22774</p>
          </div>
          <div className="font-raleway font-thin pb-[7%]">
            <img
              src={MailTransparent}
              className="h-5 inline pr-2 max-sm:h-4"
            />
           <p className="inline max-sm:text-[14px]">enactus@nsut.ac.in</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
