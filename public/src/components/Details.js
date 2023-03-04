import {React} from 'react';
import { useParams } from 'react-router-dom';
import data from './Det';


const Details = () => {
    const { index } = useParams();
    const selectedNews = data[index];

  return (
    <div className="dcontainer" >
      <h2 className="detailtitle">{selectedNews.Title}</h2>
      <div style={{display:"flex"}}>
      <img src={selectedNews.imgUrl} alt={"yes"} style={{ width: '286px'}} className="detailimg"/>
      </div>
      <p className='detaildesc'>{selectedNews.description}</p>
    </div>
  );
};

export default Details;

