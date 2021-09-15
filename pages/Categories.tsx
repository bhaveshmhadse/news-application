import { useState, useEffect } from "react";

import { Button } from "antd";

import getArticlesFromAPI from "./api/API";

const Categories = ({ SetNewsArr }) => {
  const [index, setIndex] = useState(0);
  const [clickedStyles, setClickedStyles] = useState({ color: "white", backgroundColor: "mediumseagreen", border: "transparent", filter: "none" });

  const handleButtonClick = (idx: number, value: string) => {
    setIndex(idx);
    getNewsFromApiAndSet(value);
  };

  const getNewsFromApiAndSet = async (val: string) => SetNewsArr(await getArticlesFromAPI(val));

  useEffect(() => {
    getNewsFromApiAndSet("World");
  }, []);

  return (
    <div className='button-container'>
      <Button onClick={() => handleButtonClick(0, "World")} style={index == 0 ? clickedStyles : {}} type='primary' className='but'>
        World
      </Button>
      <Button onClick={() => handleButtonClick(1, "Sports")} style={index == 1 ? clickedStyles : {}} type='primary' className='but'>
        Sports
      </Button>
      <Button onClick={() => handleButtonClick(2, "Tech")} style={index == 2 ? clickedStyles : {}} type='primary' className='but'>
        Technology
      </Button>
      <Button onClick={() => handleButtonClick(3, "Politics")} style={index == 3 ? clickedStyles : {}} type='primary' className='but'>
        Politics
      </Button>
      <Button onClick={() => handleButtonClick(4, "Entertainment")} style={index == 4 ? clickedStyles : {}} type='primary' className='but'>
        Entertainment
      </Button>
      <Button onClick={() => handleButtonClick(5, "Buisness")} style={index == 5 ? clickedStyles : {}} type='primary' className='but'>
        Buisness
      </Button>
    </div>
  );
};

export default Categories;
