import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./card.js";

export const Home = () => {
  const [allTrains, setTrains] = useState([]);

  useEffect(() => {
    try {
      const myFunction = async () => {
        return axios
          .get("http://localhost:5000/trains")
          .then((res) => res.data.data);
      };

      myFunction().then((data) => {
        setTrains(data);
      });

      // setInterval(async () => {
      //   const data = await myFunction();
      //   setTrains(data);
      // }, 60 * 1000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(allTrains);

  return (
    <div className="w-full scrollbar-hide h-full overflow-auto flex flex-row align-center justify-evenly flex-wrap">
      {allTrains
        .filter(
          ({ departureTime }, ind) =>
            !(departureTime.Hours === 0 && departureTime.Minutes < 30)
        )
        .sort((a, b) => {
          const val =
            Math.min(a.price.sleeper, a.price.AC) -
            Math.min(b.price.sleeper, b.price.AC);
          if (!val) {
            return a.seatsAvailable.sleeper + a.seatsAvailable.AC <
              b.seatsAvailable.sleeper + b.seatsAvailable.AC
              ? 1
              : -1;
          } else return val;
        })
        .map((val, ind) => (
          <Card key={val.trainNumber} id={val.trainNumber} trains={val} />
        ))}
    </div>
  );
};
