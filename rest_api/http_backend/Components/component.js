import http from "http";
import url from "url";
import request from "request";

export const getNumbers = (req, res) => {
  var parsedUrl = url.parse(req.url, true);
  var queryAsObject = parsedUrl.query;
  const reUrl = queryAsObject.url;
  const options = {
    method: "GET",
    url: reUrl,
    headers: {
      Authorization: `Bearer ${API}`,
    },
  };
  const numbers = request(options, (err, body) => {
    if(err) throw new Error(err);
    res.status(200).json(body);
  })
};
