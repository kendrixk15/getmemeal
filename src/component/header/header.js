import React from "react";
import bell from "../../image/bell.png";
import profile from "../../image/profile.png";
import logo from "../../image/ics.logo.png";

function Header() {
  return (
    <div className="font-kanit">
      {/* desktop */}
      <div className="hidden h-14 bg-mainBlue lg:flex items-center justify-end px-8 2xl:px-[9rem]">
        <div className="flex gap-4 items-center">
          <div className="flex items-center relative">
            <img src={bell} alt="notification bell" className="w-5 h-6" />
            <div className="absolute -left-4 -top-11">
              <svg height="100" width="100">
                <circle
                  cx="30"
                  cy="50"
                  r="5"
                  stroke="white"
                  strokeWidth={1}
                  fill="#F7685B"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <img src={profile} alt=" user's profile" />
            <a href="/porfile">Akkarapol</a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden h-14 bg-mainBlue flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="ics logo"
            className="w-[50px] h-[50px] rounded-xl"
          />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-4 text-white">
            <img src={profile} alt=" user's profile" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
