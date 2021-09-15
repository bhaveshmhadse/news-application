import { Input } from "antd";

const SearcBar = ({ HandleSearch }) => {
  return (
    <div className='search'>
      <Input.Search placeholder='input search text' allowClear enterButton='Search' size='large' onSearch={e => HandleSearch(e)} />
    </div>
  );
};

export default SearcBar;
