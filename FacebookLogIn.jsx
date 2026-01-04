import React from 'react'

function FacebookLogin() {
  return (
    <div className="min-h-screen w-screen bg-[#f0f2f5]">
      <div className="max-w-[1200px] mx-auto pt-32 flex flex-col md:flex-row items-start justify-between px-6">
        
        <div className="md:w-[580px]">
          <h1 className="text-[#1877f2] text-[64px] font-extrabold mb-4">
            Facebook
          </h1>
          <p className="text-black leading-8 text-[28px] font-normal">
            Connect with friends and the world <br />
            around you on Facebook.
          </p>
        </div>

        <div className="flex flex-col mt-12 md:mt-0">
          <div className="w-[396px] bg-white p-6 rounded-lg shadow-xl">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email or phone number"
                className="h-[52px] px-4 placeholder-gray-500 border border-gray-300 rounded-md text-[17px] focus:outline-none focus:border-[#1877f2]"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-[52px] px-4 placeholder-gray-500 border border-gray-300 rounded-md text-[17px] focus:outline-none focus:border-[#1877f2]"
              />

             
              <button className="h-12 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition-colors">
                Log in
              </button>
              <a
                href="#"
                className="text-[#1877f2] text-sm text-center hover:underline"
              >
                Forgot password?
              </a>

              <div className="border-t my-4"></div>

              <button className="h-12 bg-green-600 text-white font-bold text-lg rounded-md w-2/3 mx-auto hover:bg-green-700 transition-colors">
                Create new account
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-800 mt-6 ml-1">
            <span className="font-bold hover:underline cursor-pointer">
              Create a Page
            </span>{" "}
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FacebookLogin
