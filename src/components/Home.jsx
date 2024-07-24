import Carousel from "./Carousel"
import { useEffect } from "react"
import appstore from "../assets/images/appstore.png"
import playstore from "../assets/images/playstore.png"
import RosterBar from "../assets/images/RosterBar.png"
import RosterLaptop from "../assets/images/RosterLaptop.png"
import RosterCloud from "../assets/images/RosterCloud.png"
import RosterTree from "../assets/images/RosterTree.png"
import plant2 from "../assets/images/plant2.png"

function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <div>
      <div className="bg-[url('/src/assets/images/bg-image.jpg')] bg-center bg-no-repeat bg-cover relative h-[50%] px-[2%] py-[20%]">
        <div className="font-montserrat relative font-bold text-4xl md:text-8xl text-white top-[50%] translate-[(-50%,-50%)]">
          Let
          <br />
          technology
          <br />
          nourish the soil
        </div>
        <div className=" absolute bottom-0 left-0 cursor-pointer pb-9 flex ">
    
      </div>
      </div>

      <div className="flex flex-col lg:flex-row  justify-start md:gap-20 text-sm pt-10  px-auto md:px-24  pl-10 lg:text-xl">
        <img src={plant2} alt={plant2} width="350px" className="" />
        <div className="w-[23em] ">
          <p className="text-5xl font-semibold mb-3 text-center  sm:text-start">
            The story of <br />{" "}
            <span className="font-bold  md:text-7xl">
              Annotsav
            </span>
          </p>
          <p>Our Journey began with a simple question:</p>
          <p className="my-4 text-primaryColor-4 font-semibold ">
            How can we make farming and gardening more sustainable?
          </p>
          <p>
            Annotsav was created to empower farmers and gardeners with smart
            irrigation solutions, conserving water and improving crop yields
            from the ground up.
          </p>
        </div>
      </div>
     
     

      <Carousel />
      <div className="py-[5%] mx-10">
        <h1 className="font-bold font-montserrat text-center md:text-5xl text-2xl">
          Transforming Indian Agricultural
          <br />
          Landscape
        </h1>
        <br />
        <div>
          <p className="font-bold font-montserrat text-center md:pt-3">
            Harnessing Millions Of Farm Level Data Points
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[4%] mt-4 pt-4">
          <div className="border-[1px] border-black rounded p-3">
            <img
              src={RosterTree}
              className="h-9 md:h-12 w-auto mx-auto block"
            />
            <p className="md:mt-[1.5] text-sm md:text-base text-center">
              Boost your cropn yield with our 150+ Agronomy models: multiple
              crops in varied geographies.
            </p>
          </div>
          <div className="border-[1px] border-black rounded p-3">
            <img src={RosterBar} className="h-9 md:h-12 w-auto mx-auto block" />
            <p className="md:mt-[1.5%] text-sm md:text-base text-center">
              Informed crop decision with IoT device - real time crop data for
              accurate advisory.
            </p>
          </div>
          <div className="border-[1px] border-black rounded p-3">
            <img
              src={RosterLaptop}
              className="h-9 md:h-12 w-auto mx-auto block"
            />
            <p className="md:mt-[1.5%] text-sm md:text-base text-center">
              Take farm management to the next level with comprehensive multi
              platform service.
            </p>
          </div>
          <div className="border-[1px] border-black rounded p-3">
            <img
              src={RosterCloud}
              className="h-9 md:h-12 w-auto mx-auto block"
            />
            <p className="md:mt-[1.5%] text-sm md:text-base text-center">
              Unlock the power of remote weather data and artificial
              intelligence
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
