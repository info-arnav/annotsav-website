import { NavLink , useLocation} from "react-router-dom"
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
  const location = useLocation();
  useEffect(() => {
    const navigation = document.querySelector("#navigation");

    const updateNavColor = () => {
      if (!navigation) return;
      
      if (location.pathname === '/') {
        if (window.scrollY > 700) {
          navigation.classList.add('bg-primaryColor-5');
        } else {
          navigation.classList.remove('bg-primaryColor-5');
        }
      } else {
        navigation.classList.add('bg-primaryColor-5');
      }
    };

    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    window.addEventListener("scroll", updateNavColor);

    // Initial call to set the correct nav color based on the current path and scroll position
    updateNavColor();

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      window.removeEventListener("scroll", updateNavColor);
    };
  }, [location]);
  

  return (
    <>
      <section >
        <nav className="   fixed right-0 z-50 left-0 top-0  flex justify-between pr-4 w-full shadow-md  " id="navigation">
          <img src={logo} className=" h-14  pr-2" />

          {screenWidth < 700 ? (
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
                className="absolute bg-primaryColor-2 w-[50%]  z-40 right-0 flex flex-col text-3xl capitalize  pt-4 "
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
                          className="p-2 bg-gradient-to-r from-primaryColor-1 to-primaryColor-2 
                          border-[1px]
                          border-primaryColor-1"
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
                          className="p-2 bg-gradient-to-r from-primaryColor-1 to-primaryColor-2 border-[2px] border-primaryColor-1"
                          variants={menuItemVariant}
                          whileHover="hover"
                          initial="hidden"
                          animate={isOpen ? "visible" : "hidden"}
                          custom={index}
                          whileTap='tap'
                          onClick={() => {
                            setIsOpen(!isOpen)
                          }}
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
              <div className="pt-4 font-raleway text-2xl  text-white h-16 flex  ">
                <NavLink to="/" className="pr-16 hover:font-semibold  w-40 h-14">
                  Home
                </NavLink>
                <a
                  href="https://forms.gle/8FKZzg2Wi2n76Gvk6"
                  target="_blank"
                  className="pr-16 hover:font-semibold  w-40 h-14">
                  Survey
                </a>
                <NavLink to="/contact" className="pr-8 hover:font-semibold  w-40 h-14">
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
                      className="p-2 bg-primaryColor-4 text-white w-36 border-[#713906] border-2 rounded-full h-12 capitalize hover:shadow-lg hover:shadow-primaryColor-3">
                      Join Us
                    </motion.button>
                  </p>
                  <p>
                    <NavLink to={"/organisation"}>
                      <motion.button
                        type="button"
                        className=" relation p-1 mt-2 text-[18px] bg-primaryColor-3 w-36 h-12 border-[#713906] border-2 rounded-full  capitalize "
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
                        className=" p-2 my-2 bg-primaryColor-3 w-36 h-12 border-[#713906] border-2 rounded-full capitalize "
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
