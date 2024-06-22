
import React, { useState, useEffect, useRef } from "react"
import { carouselItems } from "../constants/carouselItems.js"
import { motion } from "framer-motion"
import plant from "../assets/images/plant.png"
import { btnVariant } from "../constants/animations.js"
function Carousel() {
  const handleClick = (event) => {
    const btnId = event.target.parentElement.id
    const carouselItemContainerChildren = Array.from(
      carouselContainerRef.current.children
    )
    const btnContainerChildren = Array.from(btnContainerRef.current.children)

    carouselItemContainerChildren.forEach((item) =>
      item.classList.toggle("z-10", item.id === btnId)
    )

    btnContainerChildren.forEach((item) => {

      if (item.classList.contains("opacity-100")) {
        item.classList.remove("opacity-100")
        item.classList.add("opacity-75")
      }
      if (item.id == btnId) {
        item.classList.remove("opacity-75")
        item.classList.add("opacity-100")
      }  
    })
 
  }
  const carouselContainerRef = useRef(null)
  const btnContainerRef = useRef(null)
  const reversedArray = [...carouselItems].reverse()

  return (
    <>
      <section className="w-full h-[24em] flex">
        <motion.section
          className="relative basis-4/5  my-8 ml-24"
          ref={carouselContainerRef}>
          {reversedArray.map(({ id, text1, text2, text3, image }) => (
            <div
              key={id}
              className="absolute w-full h-full flex gap-10  bg-white"
              id={id}>
              <div className=" basis-2/5">
                <img
                  src={image}
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="  py-16  basis-2/3 pr-8">
                <p className="text-secondaryColor-4 text-2xl font-semibold">{text1}</p>
                <p className="font-semibold text-5xl my-2">{text2}</p>
                <p className="text-xl">{text3}</p>
              </div>
            </div>
          ))}
        </motion.section>

        {/* carousel buttons */}
        <div
          className=" basis-14 my-8 flex flex-col justify-center gap-2 z-50"
          ref={btnContainerRef}>
          {carouselItems.map((item, index) => {
            const buttonClass =
              index === 0
                ? "bg-primaryColor-5 rounded-full w-10 h-10 opacity-100"
                : "bg-primaryColor-5 rounded-full w-10 h-10 opacity-75"
            return (
              <motion.button
              variants={btnVariant}
               whileHover={"hover"}
                className={buttonClass}
                id={item.id}
                onClick={handleClick}
                key={index}>
                <img
                  src={plant}
                  alt="img"
                  className="object-cover object-center w-full h-full "
                />
              </motion.button>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Carousel
