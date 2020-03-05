const axios = require("axios");
const mapKey =
  "pk.eyJ1IjoibWplZGczIiwiYSI6ImNrN2J1bTh0ZzBnaWgzZG1yNjNpZ2R6d2sifQ.j4fbm5FNQYZeGKZoJpNkFg";

const getLocation = async location => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapKey}`;
  try {
    const response = await axios.get(URL);
    return {
      lat: response.data.features[0].center[1],
      lng: response.data.features[0].center[0],
      location: response.data.features[0].place_name
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getLocation };
