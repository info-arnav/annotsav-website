function Navigation() {
  return (
    <>
      <div>
        {" "}
        <nav className="bg-primaryColor-5">
          <img
            src="/src/assets/images/logo.png"
            className=" h-14 w-auto absolute flex items-center pr-2"
          />
          <div className="pt-3 font-raleway text-3l text-right text-white h-16">
            <a href="" className="pr-16">
              Home
            </a>
            <a href="" className="pr-16">
              Survey
            </a>
            <a href="" className="pr-8">
              Contact Us
            </a>
            <a href="" className="pr-8">
              <button
                type="button"
                className="px-8 py-2 bg-primaryColor-4 border-[#713906] border-2 rounded-full"
              >
                Join Us
              </button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
