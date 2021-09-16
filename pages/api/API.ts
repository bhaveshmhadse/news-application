import axios from "axios";

export default async function getArticlesFromAPI(val: string) {
  let currentDate = new Date().toLocaleDateString();

  let newDate = currentDate.split("/").reverse();
  [newDate[1], newDate[2]] = [newDate[2], newDate[1]];
  const date = newDate;

  let obj = { val: val };

  const data = await axios.post(`https://news-zee-backend.herokuapp.com/`, obj);
  const arrayOfArticles = data?.data?.articles;

  return arrayOfArticles;
}
