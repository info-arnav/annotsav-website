import React, { useState } from "react"
import { motion } from "framer-motion"
import { btnVariant, orgVariant } from "../constants/animations"

function OrganisationForm() {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleView = (event) => {
    event.preventDefault()
    setIsVisible(!isVisible)
    event.target.textContent = event.target.textContent === ">" ? "v" : ">"
  }



  return (
    <>
      <div className="">
        <section className="flex items-center lg:justify-between flex-col lg:flex-row space-y-10 lg:space-y-0 m-24">
          {/* tag line part */}
          <div className="text-6xl font-bold">
            <p>Get Annotsav</p> <p>for your</p>{" "}
            <p className="  text-secondaryColor-4">Organisation</p>
          </div>
          {/* form input area  */}
          <form className="">
            <input
              type="text"
              id="name"
              placeholder="Name"
              autoFocus
              className=" input p-2 w-full mb-2 "
            />
            <p className="grid grid-rows-2 grid-cols-2 gap-2 ">
              <input
                type="text"
                id="company"
                placeholder="Company"
                className="input p-2"
              />
              <input
                type="email"
                id="email"
                placeholder="email"
                className="input p-2"
              />
              <input
                type="text"
                id="number"
                placeholder="number"
                className="input p-2"
              />
              <input
                type="text"
                id="designation"
                placeholder="Your designation"
                className="input p-2"
              />
            </p>
            <div className="input mt-2 capitalize !h-10 w-full">
              <button
                className="mx-2 mb-2 font-semibold  cursor-pointer text-2xl"
                onClick={handleToggleView}>
                {">"}
              </button>
              <span className="text-xl !font-light">
                Size of the Organisation
              </span>
            </div>

            <motion.div
              variants={orgVariant}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="input p-2 mt-2 flex flex-col !h-auto"
              id="org-size">
              <span>
                <input
                  type="radio"
                  name="hey"
                  id="range1"
                  className="mx-2"
                  defaultChecked
                />
                <label htmlFor="range1">1-10</label>
              </span>
              <span>
                <input type="radio" name="hey" id="range2" className="mx-2" />
                <label htmlFor="range2">11-50</label>
              </span>
              <span>
                <input type="radio" name="hey" id="range3" className="mx-2" />
                <label htmlFor="range3">51-100</label>
              </span>
              <span>
                <input type="radio" name="hey" id="range4" className="mx-2" />
                <label htmlFor="range4">100+</label>
              </span>
            </motion.div>
            <textarea
              id="story"
              name="story"
              rows="5"
              cols="33"
              placeholder="MESSAGE"
              className="p-2 border-[.1em] rounded-sm border-black focus:outline-none w-full  resize-none mt-2"></textarea>
            <motion.button className="bg-primaryColor-5 text-yellow-50  rounded-full w-20 h-8 text-[16px] px-4 relative -right-[80%]   mt-2"
              variants={btnVariant}
              whileHover={"hover"}
              whileTap={"tap"}
              onClick={(event) => { event.preventDefault() }}>
              Submit
            </motion.button>
          </form>
        </section>
      </div>
    </>
  )
}

export default OrganisationForm
