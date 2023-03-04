import {React,useState} from 'react';
import data from './Det';
import { Link } from 'react-router-dom';

const NewsPage =()=> {
  const [selectedNews, setSelectedNews] = useState(null);
  const handleNewsClick = (index) => {
    setSelectedNews(data[index]);
  }

  if (selectedNews) {
    return (
      <Link to={`/news/${data.indexOf(selectedNews)}`}>
      Read More
      </Link>

      // <Details
      //   title={selectedNews.Title}
      //   imgUrl={selectedNews.imgUrl}
      //   description={selectedNews.description}
      // />
    );
  }

  return (
    <div className="news-page col-lg-4" style={{ width: '100%',flexWrap: 'wrap' }} >
      {data.map((data, index) => (
        <div className="news-card" key={index}>
          <img src={data.imgUrl} alt={"yes"} className="news-image" style={{ width: '286px'}}/>
          <h5 className="news-title">{data.Title}</h5>
            <button className="read-more-btn" onClick={()=> handleNewsClick(index)}>Read more</button>
     
    </div>
      ))}
    </div>
  );
}

export default NewsPage;
