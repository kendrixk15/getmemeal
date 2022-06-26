import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data_soruce from "../../src/json/example_data.json";
import circle from "../image/Ellipse 18.png";
import convertFrom24To12Format from "../funtions";

function Place() {
  const params = useParams();
  const id = params.placeId;
  const cardList = data_soruce;
  const [thePlace, setThePlace] = useState([]);

  useEffect(() => {
    cardList.map((list) => (list.id == id ? setThePlace(list) : `no`));
  }, []);
  return (
    <div className="pt-20">
      <main className="flex justify-center lg:ml-24 pb-20">
        <section className="w-full flex flex-col items-center justify-center container">
          <div className="w-full pb-9 ">
            <Link to={"/"}>
              <button className="prime-btn py-2 px-4 rounded-full">
                {" "}
                &lt; BACK
              </button>
            </Link>
          </div>
          <div className="contentControl bg-innerPageBg gap-6 px-4 items-start py-7 rounded-xl shadow-xl">
            <div className="basis-3/5">
              {/* left side */}
              <div className="">
                <img
                  src={thePlace.profile_image_url}
                  alt={thePlace.name}
                  className="w-full h-96 object-cover rounded-t-xl"
                />
                <div className="bg-white px-6 pt-4 pb-8 rounded-b-xl">
                  {/*  place name */}
                  <div className="flex items-center justify-between">
                    <h4>{thePlace.name}</h4>
                    <div className="flex items-center text-mainBlue gap-1">
                      <img
                        src={circle}
                        className="w-auto h-2"
                        alt="circle icon"
                      />
                      <p>{thePlace.rating}</p>
                    </div>
                  </div>

                  {/* address */}
                  <div className="py-6">
                    <div className="flex gap-20">
                      <p>Address:</p>
                      <p>{thePlace.address}</p>
                    </div>
                  </div>

                  {/* hours */}
                  <div className="flex gap-8 pb-4">
                    <div>
                      <p>Opening Hours</p>
                    </div>
                    <div className="flex flex-col">
                      {thePlace.operation_time
                        ? thePlace.operation_time.map((time, i) => (
                            <div key={i} className="flex gap-4">
                              <p>{time.day}: </p>
                              <p>
                                {time.time_open !== "closed"
                                  ? convertFrom24To12Format(time.time_open)
                                  : `Closed`}
                              </p>
                              {time.time_open &&
                              time.time_close === "closed" ? (
                                ``
                              ) : (
                                <p>-</p>
                              )}
                              <p>
                                {time.time_open !== "closed"
                                  ? convertFrom24To12Format(time.time_close)
                                  : ``}
                              </p>
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-2/5">
              {/* right */}
              <div className="bg-white py-10 px-8 rounded-xl">
                <div className="pb-4">
                  <h5>Images</h5>
                </div>
                <div>
                {
                    thePlace.images? thePlace.images.map((image,i)=>(
                        <img key={i} src={image} alt="food and beverage" className={`${i===0 ? `rounded-t-xl`: i===2 ? `rounded-b-xl`:``} w-[30rem] h-80 object-cover align-middle`}/>
                    ))
                    : null
                }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile */}
    </div>
  );
}

export default Place;
