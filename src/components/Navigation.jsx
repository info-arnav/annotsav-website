import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { btnVariant } from "../constants/animations"
import logo from "../assets/images/logo.png"
import { links } from "../constants/navlinks"
import { menuItemVariant } from "../constants/animations"
import { menuVariant } from "../constants/animations"
function Navigation() {
  const [animate, setAnimate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", updateScreenWidth)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [])

  return (
    <>
      <section className="relative  ">
        <nav className="bg-primaryColor-5 flex justify-between pr-4 w-full">
          <img src={logo} className=" h-14  pr-2" />

          {screenWidth < 600 ? (
            /* *************** NAV FOR SMALL SCREEN DEVICES ********************** */
            <>
              {/* hamburger menu */}
              <motion.div
                className=" flex gap-1 mt-4 flex-col cursor-pointer z-50"
                onClick={() => setIsOpen(!isOpen)}
                id="menuBtn-container">
                <motion.div
                  className="bg-primaryColor-1 w-10 h-1 "
                  variants={menuVariant}
                  initial={null}
                  animate={isOpen ? "dash1" : "initial"}
                  transition={{
                    type: "linear",
                  }}></motion.div>
                <motion.div
                  className="bg-primaryColor-1 w-10 h-1 "
                  variants={menuVariant}
                  initial={null}
                  animate={isOpen ? "dash2" : "initial"}
                  transition={{
                    type: "linear",
                  }}></motion.div>
                <motion.div
                  className="bg-primaryColor-1 w-10 h-1 "
                  variants={menuVariant}
                  initial={null}
                  animate={isOpen ? "dash3" : "initial"}
                  transition={{
                    type: "linear",
                  }}></motion.div>
              </motion.div>

              <motion.div
                className="absolute bg-primaryColor-2 w-[50%] top-0 z-40 right-0 flex flex-col text-3xl capitalize  pt-4"
                variants={menuVariant}
                initial="close"
                animate={isOpen ? "open" : "close"}
                transition={{
                  ease: "easeIn",
                }}>
                {/* for styling */}
                <p className=" basis-[35px]  "></p>
                {links.map((item, index) => {
                  if (item.link == "survey") {
                    return (
                      <a
                        href="https://forms.gle/8FKZzg2Wi2n76Gvk6"
                        target="_blank"
                        key={index}>
                        <motion.p
                          className="p-2 "
                          variants={menuItemVariant}
                          whileHover="hover"
                          initial="hidden"
                          animate={isOpen ? "visible" : "hidden"}
                          custom={index}
                          onClick={() => {
                            setIsOpen(!isOpen)
                          }}>
                          {item.link}
                        </motion.p>
                      </a>
                    )
                  } else {
                    return (
                      <NavLink to={`${item.to}`} key={index}>
                        <motion.p
                          className="p-2 "
                          variants={menuItemVariant}
                          whileHover="hover"
                          initial="hidden"
                          animate={isOpen ? "visible" : "hidden"}
                          custom={index}
                          whileTap='tap'
                          // onClick={() => {
                          //   setIsOpen(!isOpen)
                          // }}
                          >
                          {item.link}
                        </motion.p>
                      </NavLink>
                    )
                  }
                })}
              </motion.div>
            </>
          ) : (
            //  *************** NAV FOR LARGE SCREEN DEVICES **********************
            <>
              <div className="pt-4 font-raleway text-2xl  text-white h-16 flex">
                <NavLink to="/" className="pr-16">
                  Home
                </NavLink>
                <a
                  href="https://forms.gle/8FKZzg2Wi2n76Gvk6"
                  target="_blank"
                  className="pr-16">
                  Survey
                </a>
                <NavLink to="/contact" className="pr-8">
                  Contact Us
                </NavLink>

                <motion.div
                  className=" z-20 text-secondaryColor-2 text-[20px] -mt-2  "
                  onClick={() => {
                    setAnimate(!animate)
                  }}>
                  <p className=" ">
                    <motion.button
                      type="button"
                      className="p-2 bg-primaryColor-4 text-white w-36 border-[#713906] border-2 rounded-full h-12 capitalize">
                      Join Us
                    </motion.button>
                  </p>
                  <p>
                    <NavLink to={"/organisation"}>
                      <motion.button
                        type="button"
                        className=" relation p-1 mt-2 text-[18px] bg-primaryColor-3 w-36 h-12 border-[#713906] border-2 rounded-full  capitalize"
                        initial="initial"
                        animate={animate ? "btn2" : "initial"}
                        variants={btnVariant}
                        whileHover={"hover"}>
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
                </motion.div>
              </div>
            </>
          )}
        </nav>
      </section>
    </>
  )
}

export default Navigation
