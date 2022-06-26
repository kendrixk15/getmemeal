import React from "react";
import { useState, useEffect } from "react";
import CardList from "../component/card.component/carlist";
import data_soruce from "../../src/json/example_data.json";

function HomePage() {
  const [type, setType] = useState();
  const [keyword, setKeyword] = useState();
  const cardList = data_soruce;
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const filteredCards = cardList.filter((list) =>
    keyword ? list.name.toLowerCase().includes(keyword.toLowerCase()) : cardList
  );
  const typedCardList = filteredCards.filter((list) =>
    type
      ? list.categories[0].toLowerCase().includes(type.toLowerCase())
      : filteredCards
  );

  const indexOfLastItem = page * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentList = typedCardList.slice(indexOfFirstItem, indexOfLastItem);
  const disablePoint = Math.ceil(typedCardList.length / limit);

  useEffect(() => {
    if (currentList.length === 0) {
      console.log("empty");
    } else {
      console.log(currentList);
    }
  });
  return (
    <div className="bg-borderLine h-full w-fit">
      <div className="flex justify-center lg:ml-24 pb-0 ">
        <main className="h-full">
          {/* search section */}
          <section className="w-full lg:w-[90%] xl:min-w-full fixed top-[3.19rem] bg-borderLine pr-2 pt-2 z-40">
            <div className="contentControl pl-4 ">
              <div className="w-full pl-6 lg:pl-0 z-40">
                <h4>Place List</h4>
              </div>
              <form className="flex gap-2 items-center flex-col lg:flex-row ">
                <div>
                  {/* dropdown */}
                  <select
                    onChange={(e) => (setType(e.target.value), setPage(1))}
                    className={`thin-border  py-1 border-mainBlue rounded-xl w-96 lg:w-auto ${
                      type === "" ? ` text-midGray` : `text-mainBlue`
                    }`}
                  >
                    <option value="">Please choose a category</option>
                    <option value="restaurant">Restuarants</option>
                    <option value="cafe">Cafe</option>
                    <option value="bakery">Bakery</option>
                  </select>
                </div>
                <hr className="h-6 border-mainBlue thin-border hidden lg:flex" />
                <div className="relative ">
                  <input
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="search keywords"
                    className={`thin-border py-1 px-2 border-mainBlue w-96 rounded-xl ${
                      type === "" ? ` text-midGray` : `text-mainBlue`
                    }`}
                  />
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 absolute top-2 right-3 text-midGray"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </section>
          <section className="mt-52 lg:mt-[8rem] lg:pl-4">
            <div className="contentControl w-full px-1 mb-2">
              <div className="flex w-[100vw] justify-center lg:justify-start 2xl:justify-center h-auto mt-2 flex-wrap gap-6">
                {currentList.length !== 0 ? (
                  currentList.map((list) => (
                    <div key={list.id}>
                      <CardList {...list} />
                    </div>
                  ))
                ) : (
                  <div className="w-full flex  justify-center h-full lg:h-[35vw] text-center">
                    <h1 className="text-mainBlue">
                      We cannot find <br /> "
                      <span className="text-minorBlue">{keyword}</span>" <br />{" "}
                      Please try other keywords
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </section>
          {/* pagination */}
          <div
            className={`mb-14 flex  justify-center w-full gap-5 items-center  ${
              currentList.length <= 6 ? `mt-[16rem]` : ``
            }`}
          >
            <button
              disabled={page < 1}
              onClick={() => (page > 1 ? setPage(page - 1) : null)}
              className={`w-8 h-8 flex items-center justify-center border-2 rounded-full bg-white text-lightGray  ${
                page > 1 ? `text-disableGray` : ``
              }`}
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <p className="prime-btn px-3 py-1 rounded-full">{page}</p>
            <button
              onClick={() => (page < disablePoint ? setPage(page + 1) : null)}
              className={`w-8 h-8 flex items-center justify-center border-2 rounded-full bg-white text-lightGray  ${
                page < disablePoint ? `text-disableGray` : ``
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
