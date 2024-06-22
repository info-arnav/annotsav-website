import { NavLink } from "react-router-dom"
import { useState } from "react"
import {motion } from "framer-motion";
import { btnVariant } from "../constants/animations";
import logo from "../assets/images/logo.png"
function Navigation() {
 
  const [animate, setAnimate] = useState(false)
  const handleClick = () => {
    setAnimate(!animate)
  }
  return (
    <>
      <div>
        {" "}
        <nav className="bg-primaryColor-5 flex justify-between pr-4">
          <img src={logo} className=" h-14  pr-2" />
          <div className="pt-4 font-raleway text-2xl  text-white h-16 flex">
            <NavLink to="/" className="pr-16">
              Home
            </NavLink>
            <NavLink to="#" className="pr-16">
              Survey
            </NavLink>
            <NavLink to="/contact" className="pr-8">
              Contact Us
            </NavLink>

            <motion.div
              className=" z-20 text-secondaryColor-2 text-[20px] -mt-2  "
              onClick={handleClick}>
              <p className=" ">
                <motion.button
                  type="button"
                  className="p-2 bg-primaryColor-4 text-white w-36 border-[#713906] border-2 rounded-full h-12 capitalize"
                  
                  >
                  Join Us
                </motion.button>
              </p>
              <p>
                <NavLink to={"/organisation"}>
                  <motion.button
                    type="button"
                    className=" relation p-1 text-[18px] bg-primaryColor-3 w-36 h-12 border-[#713906] border-2 rounded-full  capitalize"
                    initial="initial"
                    animate={animate ? "btn2" : "initial"}
                    variants={btnVariant}
                    whileHover={"hover"}
                    >
                    as organisation
                  </motion.button>
                </NavLink>
              </p>
              <p>
                <NavLink to="/volunteer">
                  <motion.button
                    type="button"
                    className=" p-2 my-6 bg-primaryColor-3 w-36 h-12 border-[#713906] border-2 rounded-full capitalize"
                    initial="initial"
                    animate={animate ? "btn3" : "initial"}
                    variants={btnVariant}
                    whileHover={"hover"}>
                    as volunteer
                  </motion.button>
                </NavLink>
              </p>
              <p>
                <NavLink to={"/contact"}>
                  <motion.button
                    type="button"
                    className=" p-2 bg-primaryColor-3 w-36 h-12 border-[#713906] border-2 rounded-full capitalize"
                    initial="initial"
                    animate={animate ? "btn4" : "initial"}
                    variants={btnVariant}
                    whileHover={"hover"}>
                    react us
                  </motion.button>
                </NavLink>
              </p>
            </motion.div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navigation
