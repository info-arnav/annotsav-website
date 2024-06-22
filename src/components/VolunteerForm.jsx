import React from "react"

function VolunteerForm() {
  return (
    <>
      <div className="">
        <section className="flex justify-between  m-24">
          {/* tag line part */}
          <div className="text-6xl  font-bold">
            <p>Share your 💡</p> <p>idea on how</p>
            <p>we can grow</p>
            <p className=" text-secondaryColor-4">Annotsav </p>
            <p className="text-secondaryColor-4">Moment</p>
          </div>
          {/* form input area  */}
          <form className="   ">
            <input
              type="text"
              id="name"
              placeholder="Name"
              autoFocus
              className=" input p-2 w-full mb-2 "
            />
            <p className="grid grid-rows-1 grid-cols-2 gap-2 ">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="input p-2"
              />
              <input
                type="text"
                id="number"
                placeholder="Contact number"
                className="input p-2"
              />
            </p>

            
            <textarea
              id="story"
              name="story"
              rows="5"
              cols="33"
              placeholder="Tell us what you want to do for the moment"
              className="p-2 border-[.1em] rounded-sm border-black focus:outline-none w-full  resize-none mt-2"></textarea>
            <button className="bg-primaryColor-5 text-yellow-50  rounded-full w-20 h-8 text-[16px] px-4 relative -right-[80%]   mt-2">
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default VolunteerForm
