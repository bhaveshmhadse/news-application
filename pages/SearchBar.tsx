import { Input } from "antd";

const SearcBar = ({ HandleSearch }) => {
  return (
    <div className='search'>
      <Input.Search className='input' placeholder='Search for news...' allowClear enterButton='Search' size='large' onSearch={e => HandleSearch(e)} />
    </div>
  );
};

export default SearcBar;
