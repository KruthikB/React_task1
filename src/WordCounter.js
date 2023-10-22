// src/WordCounter.js
import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    // Calculate word count when the text changes
    setWordCount(newText.trim().split(/\s+/).length);
  };

  return (
    <div className="word-counter">
      <h1>Responsive paragraph word counter</h1>
      <div className="input-container">
        <textarea
          placeholder="Enter your text here!!"
          onChange={handleTextChange}
          value={text}
        />
        <p>Word count: {wordCount}</p>
      </div>
    </div>
  );
};

export default WordCounter;
