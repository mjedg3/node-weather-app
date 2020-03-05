const axios = require("axios");
const apiKey = "2d720a4f21c6f52d96a106d3662c51bb";

const getWeather = async locationObject => {
  const { lat, lng, location } = locationObject;
  const URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
  try {
    const response = await axios.get(URL);
    return {
      location: location,
      data: response.data.currently
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getWeather };

// console.log(
//   `The weather in ${location} is ${
//     response.data.currently.summary
//   } and the temperature is ${(
//     (response.data.currently.temperature - 32) *
//     (5 / 9)
//   ).toFixed(2)} degrees celcius.`
// );
