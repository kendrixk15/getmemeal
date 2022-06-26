import { useEffect, useState } from "react";
import circle from "../../image/Ellipse 18.png";
import { Link } from "react-router-dom";
import convertFrom24To12Format from "../../funtions";

function CardList({ ...list }) {
  const [open12, setOpen12] = useState();
  const [time12, set12] = useState();

  useEffect(() => {
    set12(convertFrom24To12Format(list.operation_time[0].time_close));
    setOpen12(convertFrom24To12Format(list.operation_time[0].time_open));
  }, []);
  return (
    <div className="flex justify-center h-56 ">
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
            <div className="flex items-center gap-2">
              <img src={circle} className="w-auto h-2" alt="circle icon" />
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
  );
}

export default CardList;
