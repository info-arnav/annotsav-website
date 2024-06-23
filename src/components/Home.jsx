import Carousel from "./Carousel";
import { useEffect } from "react";
import appstore from "../assets/images/appstore.png"
import playstore from "../assets/images/playstore.png"
import RosterBar from "../assets/images/RosterBar.png"
import RosterLaptop from "../assets/images/RosterLaptop.png"
import RosterCloud from "../assets/images/RosterCloud.png"
import RosterTree from "../assets/images/RosterTree.png"



function Home() {
  useEffect (()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div className="bg-[url('/src/assets/images/bg-image.jpg')] bg-center bg-no-repeat bg-cover relative h-[50%] px-[2%] py-[20%]">
        <div className="font-montserrat relative font-bold text-8xl text-white top-[50%] translate-[(-50%,-50%)]">
          Let
          <br />
          technology
          <br />
          nourish the soil
        </div>
      </div>
      <div className="pt-[10%] pb-[3%] px-[5%]">
        <h1 className="font-semibold font-montserrat text-5xl">
          The Story of <br />
          Annotsav
        </h1>
        <div className="max-w-[34%] mt-[5%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
          delectus at. Expedita omnis laudantium consectetur. Assumenda alias
          autem, rem quidem eos cupiditate doloremque esse ullam minus vel
          molestiae labore animi.
        </div>
      </div>
      {/* /src/assets/images/bg-image.jpg */}
      <img
        src={appstore}
        className="h-16 inline ml-[3%]"
      />
      <img src={playstore} className="h-16 inline" />
      <Carousel />
      <div className="py-[5%] mx-10">
        <h1 className="font-bold font-montserrat text-5xl text-center">
          Transforming Indian Agricultural
          <br />
          Landscape
        </h1>
        <br />
        <div>
          <p className="font-bold pt-3 font-montserrat text-center">
            Harnessing Millions Of Farm Level Data Points
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[4%] mt-4 pt-4">
          <div className="border-[1px] border-black rounded p-3">
            <img
              src={RosterTree}
              className="h-12 w-auto mx-auto block"
            />
            <p className="mt-[1.5] [font-size:auto ] text-center">
              Boost your cropn yield with our 150+ Agronomy models: multiple
              crops in varied geographies.
            </p>
          </div>
          <div className="border-[1px] border-black rounded p-3">
            <img
              src={RosterBar}
              className="h-12 w-auto mx-auto block"
            />
            <p className="mt-[1.5%] [font-size:auto] text-center">
              Informed crop decision with IoT device - real time crop data for
              accurate advisory.
            </p>
          </div>
          <div className="border-[1px] border-black rounded p-3">
            <img
              src={RosterLaptop}
              className="h-12 w-auto mx-auto block"
            />
            <p className="mt-[1.5%] [font-size:auto] text-center">
              Take farm management to the next level with comprehensive multi
              platform service.
            </p>
          </div>
          <div className="border-[1px] border-black rounded p-3">
            <img
              src={RosterCloud}
              className="h-12 w-auto mx-auto block"
            />
            <p className="mt-[1.5%] [font-size:auto] text-center">
              Unlock the power of remote weather data and artificial
              intelligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
