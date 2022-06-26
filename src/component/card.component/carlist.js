import { useEffect, useState } from "react";
import circle from "../../image/Ellipse 18.png";
import { Link } from "react-router-dom";
import convertFrom24To12Format from "../../funtions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CardList({ ...list }) {
  const [open12, setOpen12] = useState();
  const [time12, set12] = useState();

  useEffect(() => {
    set12(convertFrom24To12Format(list.operation_time[0].time_close));
    setOpen12(convertFrom24To12Format(list.operation_time[0].time_open));
  }, []);
  return (
    <div className="flex justify-center h-56 mb-24 lg:mb-0">
      <div className="hidden lg:flex">
        <Link to={`place/${list.id}`}>
          <div className="block py-4 px-6 rounded-lg shadow-lg bg-white ">
            <div className="flex gap-4">
              <img
                src={list.profile_image_url}
                alt={list.name}
                className="w-12 h-12 rounded-xl"
              />
              <div>
                <h5 className="text-gray-900 text-xl leading-tight font-medium pb-2 ">
                  {list.name}
                </h5>
                <div className="flex gap-24">
                  <p className="text-gray-700 text-[14px] mb-2 flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {open12} to {time12}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={circle}
                      className="w-auto h-2"
                      alt="circle icon"
                    />
                    <p>{list.rating}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-0 w-full overflow-hidden">
              {list.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="exp pics"
                  className={`w-[7.5rem] h-[7.5rem] overflow-hidden object-cover ${
                    i === 0 ? `rounded-l-xl` : i === 2 ? `rounded-r-xl` : ``
                  }`}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden justify-center">
        <div className="flex flex-col item py-4 px-6 rounded-lg shadow-lg bg-borderLine h-[21rem] w-[95%]">
          <Link to={`place/${list.id}`}>
            <img
              src={list.profile_image_url}
              alt={list.name}
              className="w-full h-20 object-cover rounded-t-xl"
            />
          </Link>
          <div className="flex gap-4">
            <div>
              <p className="text-gray-900 text-[12px] py-2 leading-tight font-medium">
                {list.name}
              </p>
              <div className="flex gap-24 ">
                <p className="text-gray-700 text-[10px] mb-2 flex gap-1 items-center">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {open12} to {time12}
                </p>
                <div className="flex items-center gap-2 mb-2 relative">
                  <p className="absolute -right-28 -top-12 bg-mainBlue py-1 px-6 text-white rounded-2xl">{list.rating}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 w-full  slideCarousel">
            <Carousel 
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            className="w-[23rem] z-30 overflow-hidden "
            >
              {list.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="exp pics"
                  className={`w-[7.5rem] h-[11rem] rounded-lg overflow-hidden object-cover`}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
