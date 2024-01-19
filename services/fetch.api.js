import axios from "axios";
export const BASEURL = "http://bayut.p.rapidapi.com";
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvv")


export const fetchApi = async (url) => {
  
const options = {
  method: 'GET',
  url: 'https://realtor16.p.rapidapi.com/forsale',
  params: {
    location: 'santa monica',
    type: 'single_family,condos'
  },
  headers: {
    'X-RapidAPI-Key': 'efa775a856mshdef291687c925cbp11e352jsne3d8645526c1',
    'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
  }
};

try {
  console.log("checking...........................")
	const response = await axios.request(options);
	console.log(response.data.home_search.results);
  console.log("done checking fffffffffffffffffffffff")

} catch (error) {
	console.log(error);
}
};
await fetchApi()


