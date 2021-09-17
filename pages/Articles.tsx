import { Image, Typography, Card } from "antd";

const Articles = ({ NewsArr }) => {
  return (
    <div>
      {NewsArr.map(eachObj => {
        return (
          <Card key={eachObj.url} className='news-card' aria-haspopup='true' type='inner'>
            <Image className='news-image' src={eachObj.urlToImage} />
            <div className='info'>
              <Typography.Paragraph ellipsis={{ rows: 3, expandable: true }} className='news-heading'>
                {eachObj.author || "No Author"}
              </Typography.Paragraph>
              <p className='news-info'>{eachObj.description}</p>
            </div>
            <a href={eachObj.url}>Explore More</a>
          </Card>
        );
      })}
    </div>
  );
};

export default Articles;
