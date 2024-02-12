import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import './Page.css';
import axios from 'axios';

const API_HOST = "http://127.0.0.1:8000";

const defaultImageUrls = [
  'https://img.freepik.com/premium-vector/nature-outdoor-with-cute-kids-books-letter-cubes_679557-1977.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
  'https://img.freepik.com/free-vector/children-wild-animals-field_1308-31671.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
  'https://img.freepik.com/free-vector/kids-discussing-with-book-forest_1308-30690.jpg?size=626&ext=jpg',
];

const Page = ({ pageIndex }) => {
  
  const [pageText,setPageText] = useState('');
  const [imageUrls,setImageUrls] = useState(defaultImageUrls);
  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    // fetch from lcoaclstorage
    setPageText(localStorage.getItem(`${pageIndex}:text`) || '');
    setImageUrls(JSON.parse(localStorage.getItem(`${pageIndex}:imageUrls`)) || defaultImageUrls);
    setSelectedImage(parseInt(localStorage.getItem(`${pageIndex}:selectedImage`) || 0));
  }, []);

  const setLocalStore = () => {
    localStorage.setItem(`${pageIndex}:text`,pageText);
    localStorage.setItem(`${pageIndex}:imageUrls`,JSON.stringify(imageUrls));
    localStorage.setItem(`${pageIndex}:selectedImage`,selectedImage);
  }

  const generateImage = () => {
    // call api
    axios.post(API_HOST+'/generate_images', {'rawText':pageText}).then(res => setImageUrls(res.data.imageUrls));
  }
  
  return (
    <div className="page">
      <h2>Page {pageIndex + 1}</h2>
      <textarea rows={10} cols={50} value={pageText} onChange={(e)=>setPageText(e.target.value)} />
      <button onClick={() => generateImage()}>Generate Image</button>      
      <Carousel images={imageUrls} onSelectImage={setSelectedImage} selectedImage={selectedImage} />
      <button onClick={setLocalStore}>Save</button>
    </div>
  );
};

export default Page;
