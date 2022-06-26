import logo from "../../image/ics.logo.png";
import place from "../../image/place.png";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="hidden lg:flex absolute top-0">
      <div className="bg-white shadow-xl rounded-r-[3rem] h-screen w-[90px]">
      <Link to="/">
        <div className="flex w-full justify-center border-b-2 border-borderLine">
          <img src={logo} alt="ics logo" className="w-16 pt-6 pb-6 px-2 " />
        </div>
      </Link>
        <div>
        <Link to={'/'}>
          <div className="w-full flex justify-center flex-col items-center py-8  border-b-2 border-borderLine">
            <img src={place} alt="list icon" className="w-9 bg-minorBlue rounded-lg py-3 px-3" />
            <p className="text-[12px] font-bold py-1">Place</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
