function Footer() {
  return (
    <div>
      <h1 className="font-montserrat font-bold text-8xl text-center mt-[10%] pb-[10%]">
        LET'S CELEBRATE
        <br />
        <div className="text-[#FD9B63]">ANN-OTSAV</div>
      </h1>
      <div className="flex bg-primaryColor-5 pb-[5%]">
        <div className="inline-grid grid-cols-2 text-white pl-[13%] py-[5%]">
          <div className="col-span-2 font-montserrat font-bold pb-[20%]">
            QUICK LINKS
          </div>
          <a className="font-raleway font-sm font-light py-[12%]">Home</a>
          <a className="font-raleway font-sm font-light pl-[23%] py-[12%]">
            Organisation
          </a>
          <a className="font-raleway font-sm font-light py-[12%]">Contact Us</a>
          <a className="font-raleway font-sm font-light pl-[23%] py-[12%]">
            Volunteer
          </a>
          <a className="font-raleway font-sm font-light py-[12%]">Survey</a>
          <a className="font-raleway font-sm font-light pl-[23%] py-[12%]">
            Reach Us
          </a>
        </div>
        <div className="inline-grid grid-cols-1 text-white pl-[13%] py-[5%] gap-[25%]">
          <div className="font-montserrat font-bold text-center">
            DOWNLOAD APP
          </div>
          <a href="/">
            <img
              src="src/assets/images/PlaystoreTransparent.png"
              className="max-h-12"
            />
          </a>
          <a href="/">
            <img
              src="src/assets/images/AppStoreTransparent.png"
              className="max-h-12"
            />
          </a>
        </div>
        <div className="inline-grid grid-cols-1 text-white pl-[13%] py-[4%] max-w-[28%]">
          <img src="src/assets/images/logo.png" className="h-14" />
          <div className="font-raleway font-thin pt-[15%] pb-[7%]">
            <img
              src="src/assets/images/LocationMarkerTransparent.png"
              className="h-6 inline pr-2"
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="font-raleway font-thin pb-[7%]">
            <img
              src="src/assets/images/PhoneTransparent.png"
              className="h-6 inline pr-2"
            />
            999999999
          </div>
          <div className="font-raleway font-thin pb-[7%]">
            <img
              src="src/assets/images/MailTransparent.png"
              className="h-5 inline pr-2"
            />
            annotsav@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
