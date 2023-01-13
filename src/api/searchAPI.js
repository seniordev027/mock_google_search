const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.REACT_APP_GOOGLE_CONTEXT_KEY;

const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=`;

export const fetchSearchData = async (searchValue) => {
  try {
    const response = await fetch(url + searchValue);
    if (response.ok) {
      const searchData = await response.json();
      return searchData.items;
    }

    throw new Error();
  } catch (error) {
    return []
  }
};
