import './CreateStorybookPage.css';
import React, { useState } from 'react';
import Carousel from './Carousel';

const CreateStorybookPage = () => {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const [paragraphs, setParagraphs] = useState(['']); // Maintain an array of paragraphs
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // Track current page index

  const mockSummarizationApi = async (inputParagraph) => {
    // Simulate summarization API call
    // This is a placeholder and should be replaced with an actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const summary = `Summary for: ${inputParagraph.substring(0, 20)}...`;
        resolve({ summary });
      }, 1000);
    });
  };

  const mockImageGenerationApi = async (inputSummary) => {
    // Simulate image generation API call
    // This is a placeholder and should be replaced with an actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const imageUrls = [
          'https://img.freepik.com/premium-vector/nature-outdoor-with-cute-kids-books-letter-cubes_679557-1977.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
          'https://img.freepik.com/free-vector/children-wild-animals-field_1308-31671.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
          'https://img.freepik.com/free-vector/kids-discussing-with-book-forest_1308-30690.jpg?size=626&ext=jpg',
        ];
        resolve({ image_urls: imageUrls });
      }, 1000);
    });
  };

  const handleGenerateIllustrations = async () => {
    const generatedImagesArray = [];
    for (const paragraph of paragraphs) {
      const summarizationResponse = await mockSummarizationApi(paragraph);
      const summary = summarizationResponse.summary;
      const imageGenerationResponse = await mockImageGenerationApi(summary);
      generatedImagesArray.push(imageGenerationResponse.image_urls);
    }
    setGeneratedImages(generatedImagesArray);

    // // Simulate API calls with stub functions
    // const summarizationResponse = await mockSummarizationApi(paragraphs);
    // const summary = summarizationResponse.summary;

    // const imageGenerationResponse = await mockImageGenerationApi(summary);
    // setGeneratedImages(imageGenerationResponse.image_urls);
  };

  const handleNextPage = () => {
    if (currentPageIndex < paragraphs.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };


  return (
    <div className="create-storybook-page">
      <h2>Create Storybook Page</h2>

      {/* Text Input Section */}
      <div>
        <label htmlFor="storybook-text">Enter Paragraph:</label>
        <textarea
          id="storybook-text"
          rows="4"
          cols="50"
          value={paragraphs}
          onChange={(e) => setParagraphs(e.target.value)}
        />
      </div>

      {/* Generate Illustrations Button */}
      <button onClick={handleGenerateIllustrations}>Generate Illustrations</button>

      {/* Carousel for Images */}
      {generatedImages.length > 0 && (
        <div>
          <h3>Choose an Image:</h3>
          <Carousel images={generatedImages} onSelectImage={setSelectedImage} />
        </div>
      )}

      {/* Display the selected image */}
      {selectedImage && <div><h3>Selected Image:</h3><img src={selectedImage} alt="Selected" /></div>}
    </div>
  );
};

export default CreateStorybookPage;
