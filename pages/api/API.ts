import axios from "axios";

export default async function getArticlesFromAPI(val: string) {
  let currentDate = new Date().toLocaleDateString();

  let newDate = currentDate.split("/").reverse();
  [newDate[1], newDate[2]] = [newDate[2], newDate[1]];
  const date = newDate;

  const data = await axios.get(`https://newsapi.org/v2/everything?q=${val}&from=${date}&sortBy=publishedAt&apiKey=2522030560fd4badbf8f3c5df37671f2`);
  const arrayOfArticles = data?.data?.articles;

  return arrayOfArticles;
}
