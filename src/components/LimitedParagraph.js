import React from 'react';

const LimitedParagraph = ({ text }) => {
  const limitedText = text.length > 100 ? text.slice(0,100) + '  ......' : text;

  return <p className='text-gray-600 mb-4 text'>{limitedText}</p>;
};

export default LimitedParagraph;