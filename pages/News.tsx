import { useState } from "react";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Articles from "./Articles";
import Categories from "./Categories";
import getArticlesFromAPI from "./api/API";

const News = () => {
  const [newsArr, setNewsArr] = useState([]);

  const handleSearch = async (val: string) => setNewsArr(await getArticlesFromAPI(val));

  return (
    <div className='container'>
      <NavBar />
      <SearchBar HandleSearch={(value: string) => handleSearch(value)} />
      <Categories SetNewsArr={newArray => setNewsArr(newArray)} />
      <Articles NewsArr={newsArr} />
    </div>
  );
};

export default News;
