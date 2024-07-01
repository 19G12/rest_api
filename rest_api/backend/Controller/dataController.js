import request from "request";

const allTrainData = [
  {
    trainName: "Srinagar Exp",
    trainNumber: "2349",
    departureTime: {
      Hours: 14,
      Minutes: 55,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 1,
      AC: 0,
    },
    price: {
      sleeper: 1807,
      AC: 1894,
    },
    delayedBy: 10,
  },
  {
    trainName: "Amritsar Exp",
    trainNumber: "2346",
    departureTime: {
      Hours: 19,
      Minutes: 0,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 15,
      AC: 10,
    },
    price: {
      sleeper: 1500,
      AC: 500,
    },
    delayedBy: 13,
  },
  {
    trainName: "Kolkata Exp",
    trainNumber: "2345",
    departureTime: {
      Hours: 20,
      Minutes: 15,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 16,
      AC: 70,
    },
    price: {
      sleeper: 1300,
      AC: 1400,
    },
    delayedBy: 14,
  },
  {
    trainName: "Hyderabad Exp",
    trainNumber: "2341",
    departureTime: {
      Hours: 23,
      Minutes: 55,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 6,
      AC: 7,
    },
    price: {
      sleeper: 255,
      AC: 1200,
    },
    delayedBy: 5,
  },
  {
    trainName: "Pune Exp",
    trainNumber: "2342",
    departureTime: {
      Hours: 23,
      Minutes: 0,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 6,
      AC: 7,
    },
    price: {
      sleeper: 1299,
      AC: 319,
    },
    delayedBy: 17,
  },
  {
    trainName: "Mumbai Exp",
    trainNumber: "2343",
    departureTime: {
      Hours: 22,
      Minutes: 37,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 8,
      AC: 15,
    },
    price: {
      sleeper: 1370,
      AC: 1470,
    },
    delayedBy: 16,
  },
  {
    trainName: "Cochin Exp",
    trainNumber: "2348",
    departureTime: {
      Hours: 15,
      Minutes: 55,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 1,
      AC: 0,
    },
    price: {
      sleeper: 2000,
      AC: 4000,
    },
    delayedBy: 11,
  },
  {
    trainName: "Lucknow Exp",
    trainNumber: "2347",
    departureTime: {
      Hours: 17,
      Minutes: 33,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 5,
      AC: 1,
    },
    price: {
      sleeper: 1070,
      AC: 1393,
    },
    delayedBy: 12,
  },
  {
    trainName: "Chennai Exp",
    trainNumber: "2344",
    departureTime: {
      Hours: 21,
      Minutes: 35,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 3,
      AC: 1,
    },
    price: {
      sleeper: 2000,
      AC: 5000,
    },
    delayedBy: 15,
  },
];

export const getAllTrains = (req, res) => {
  // const options = {
  //   method: "GET",
  //   url: "http://20.244.56.144/train/trains",
  //   headers: {
  //     Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  //   },
  // };
  // request(options, (err, response, body) => {
  //   if (err) throw new Error(err);
  //   res.json({body: JSON.parse(response.body)});
  // }) API call, send statically for now

  res.status(200).json({ data: allTrainData });
};

export const getOneTrain = (req, res) => {
  const trainID = req.params.train;
  var train;
  // const options = {
  //     method: "GET",
  //     url: `http://20.244.56.144/train/trains/${trainID}`,
  //     headers: {
  //         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  //     },
  // };
  // request(options, (err, response, body) => {
  //     if (err) throw new Error(err);
  //     res.json({body: JSON.parse(response.body)});
  //   }) API call, send statically for now
  allTrainData.forEach((val) => {
    try {
      if (val.trainNumber === trainID) {
        res.status(200).json(val);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  });
};

export const redirectTrains = (req, res) => {
  res.redirect("/trains");
};
