import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import './Page.css';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
const API_HOST = process.env.REACT_APP_API_URL;

const Page = React.forwardRef(( props, ref ) => {
  
  const [pageText,setPageText] = useState('');
  const [imageUrls,setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // fetch from lcoaclstorage
    setPageText(localStorage.getItem(`${props.pageIndex}:text`) || '');
    setImageUrls(JSON.parse(localStorage.getItem(`${props.pageIndex}:imageUrls`)) || []);
    setSelectedImage(parseInt(localStorage.getItem(`${props.pageIndex}:selectedImage`) || 0));
  }, [props.pageIndex]);

  const setLocalStore = () => {
    localStorage.setItem(`${props.pageIndex}:text`,pageText);
    localStorage.setItem(`${props.pageIndex}:imageUrls`,JSON.stringify(imageUrls));
    localStorage.setItem(`${props.pageIndex}:selectedImage`,selectedImage);
  }

  const generateImage = () => {
    // api call
    setIsLoading(true);
    axios.post(`${API_HOST}/generate_images`, {'rawText':pageText})
        .then(res => setImageUrls(res.data.imageUrls))
        .finally(() => setIsLoading(false));
  }
  
  return (
    <div className="page" ref={ref}>
      <h2>Page {props.pageIndex + 1}</h2>
      <textarea rows={10} cols={50} value={pageText} onChange={(e)=>setPageText(e.target.value)} />
      <button onClick={() => generateImage()} disabled={isLoading} style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}>Generate Image</button>
      {isLoading ? (
        <div className={`spinner ${isLoading ? 'show' : 'hide'}`}>
          <RingLoader color="#123abc" loading={isLoading} />
        </div>
      ) : (
        <Carousel images={imageUrls} onSelectImage={setSelectedImage} selectedImage={selectedImage} />
      )}
      <button onClick={setLocalStore}>Save</button>
    </div>
  );
});

export default Page;
