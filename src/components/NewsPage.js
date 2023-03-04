import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import data from './Det';

const NewsPage =()=> {
  const history= useNavigate();
  const handleNewsClick = (index) => {
    history(`/news/${index}`);
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
