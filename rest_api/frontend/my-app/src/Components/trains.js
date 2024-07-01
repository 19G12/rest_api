import moment from "moment";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Train = (props) => {
  const [singleTrain, setTrain] = useState();

  const { id } = props?.match?.params;

  useEffect(() => {
    try {
      const myFunction = async () => {
        return await axios.get(`http://localhost:5000/trains/train/${id}`);
      };

      myFunction().then(({ data }) => {
        setTrain(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (singleTrain) {
    const { delayedBy, departureTime, price, seatsAvailable, trainName } =
      singleTrain;

    var depTime = moment()
      .add(departureTime.Hours, "hours")
      .add(departureTime.Minutes, "minutes")
      .add(departureTime.Seconds, "seconds")
      .format("hh:mm A ");

    return (
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-4/5 h-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-[url('https://tse3.mm.bing.net/th?id=OIP.QrNZbg5TkYZdQxmlgogimgHaEK&pid=Api&P=0&h=180')] p-10">
          <div className="flex flex-col justify-evenly items-center w-4/5 h-full bg-[#fff]/20 backdrop-blur-md rounded drop-shadow-lg rounded-xl p-3">
            <div className="w-11/12 font-extrabold text-3xl text-center bg-[#fff] p-2 rounded-lg">
              {trainName}
            </div>
            <div className="w-11/12 h-3/5 p-2 text-center bg-[#fff] flex flex-col justify-evenly items-center">
              <p className="font-bold text-lg text-[#000]">
                Departure time:{" "}
                <span className="text-[#183D3D]">{depTime}</span>
              </p>
              <p className="font-bold text-lg text-[#000]">
                Delayed by:{" "}
                <span className="text-[#183D3D]">{delayedBy} min</span>
              </p>
              <div className="w-full h-full p-2 text-center flex flex-row justify-center items-center">
                <div className="w-1/2 h-full flex flex-col justify-center items-center">
                  <h1 className="w-full text-center font-extrabold text-3xl text-[#183D3D]">
                    AC
                  </h1>
                  <p className="font-bold text-lg text-[#000]">
                    Price:{" "}
                    <span className="text-[#183D3D]">
                      {price.AC} <span className="WebRupee">&#x20B9;</span>{" "}
                    </span>
                  </p>
                  <p className="font-bold text-lg text-[#000]">
                    Seats available:{" "}
                    <span className="text-[#183D3D]">{seatsAvailable.AC}</span>
                  </p>
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center items-center">
                  <h1 className="w-full text-center font-extrabold text-3xl text-[#183D3D]">
                    Sleeper
                  </h1>
                  <p className="font-bold text-lg text-[#000]">
                    Price:{" "}
                    <span className="text-[#183D3D]">
                      {price.sleeper} <span className="WebRupee">&#x20B9;</span>{" "}
                    </span>
                  </p>
                  <p className="font-bold text-lg text-[#000]">
                    Seats available:{" "}
                    <span className="text-[#183D3D]">
                      {seatsAvailable.sleeper}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
