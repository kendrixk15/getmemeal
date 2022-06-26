import Header from "./component/header/header";
import SideNav from "./component/header/side-nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Place from "./pages/place";

function App() {
  // const API_KEY = "AIzaSyB6GRirUjz4hdNaQAv_-Yoq2fnadiSUvCc";
  // const lat = "13.779820829768585";
  // const long = "100.54464812602707";
  // const distance = "5000";

  // const handleSubmit =(e)=>{
  //   e.preventDefault()
  //   var axios = require("axios");

  // var config = {
  //   method: "get",
  //   url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=${distance}&type=${type}&keyword=${keyword}&key=${API_KEY}`,
  //   headers: {},
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  return (
    <div className="pageControl bg-borderLine ">
      <div>
        {/* Header */}
        <div className="fixed w-full -top-1 z-50">
          <Header />
        </div>
        <div className="fixed -top-0 z-50">
          <SideNav />
        </div>
        {/* Main content */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="place/:placeId" element={<Place/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
