import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Card = ({ trains, id }) => {
  const history = useHistory();

  const handleClicks = () => {
    history.push(`/${id}`);
  };

  const {
    delayedBy,
    departureTime,
    price,
    seatsAvailable,
    trainName,
  } = trains;

  var depTime = moment()
    .add(departureTime.Hours, "hours")
    .add(departureTime.Minutes, "minutes")
    .add(departureTime.Seconds, "seconds")
    .format("hh:mm A ddd MMM-DD");
  
  return (
    <div
      onClick={handleClicks}
      style={{
        backgroundImage: `url(http://www.pngmart.com/files/7/Train-Rail-PNG-HD.png)`,
      }}
      className={`lg:w-1/4 md:w-1/3 w-11/12  p-2 text-center flex flex-col justify-start items-center lg:h-2/5 h-1/2 lg:m-3 m-2 rounded-lg bg-[#FAF1E4] cursor-pointer bg-top bg-contain bg-no-repeat`}
    >
      <div className="w-full h-full flex flex-col justify-start items-center bg-[#fff]/[0.6]">
        <h1 className="w-full text-3xl font-bold text-[#000] p-1">
          {trainName}
        </h1>
        <p className="w-full p-1 font-semibold text-lg text-[#000]">
          <span className="text-[#000] text-xl font-bold">Departs at:</span>{" "}
          {depTime}
        </p>
        <p className="w-full p-1 font-semibold text-lg text-[#000]">
          <span className="text-[#000] text-xl font-bold">
            Prices starting at: <span className="WebRupee">&#x20B9;</span>{" "}
          </span>{" "}
          {price.sleeper > price.AC ? price.AC : price.sleeper}
        </p>
        <div className="p-3 bg-[#fff] w-full text-[#000] font-extrabold rounded-lg">
          <p className="w-full p-2">Delayed by: <span className="text-[#A73121]"> {delayedBy} min</span></p>
          {seatsAvailable.sleeper < 3 && seatsAvailable.AC < 3 && (
            <p className="w-full p-2 text-[#DF2E38] text-base	font-sans"> *filling fast </p>
          )}
        </div>
      </div>
    </div>
  );
};
