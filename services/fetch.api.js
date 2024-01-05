import axios from "axios";
export const BASEURL = "http://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const data = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "efa775a856mshdef291687c925cbp11e352jsne3d8645526c1",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
