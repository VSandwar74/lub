import React, { useState } from 'react';
import { useWindowSize } from 'react-use';

function MovingButton() {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  const handleButtonClick = () => {
    const changeTop = Math.random() * (windowHeight - 40); // Height of the button
    const changeLeft = Math.random() * (windowWidth - 100); // Width of the button
    setMarginTop(changeTop % windowHeight / 3);
    setMarginLeft(changeLeft % windowWidth / 3);
  };

  return (
    <button
      style={{ marginTop: `${marginTop}px`, marginLeft: `${marginLeft}px` }}
      className='rounded-xl bg-white py-2 px-4 '
      onMouseOver={handleButtonClick}
    >
      <p>NOOO, I HATE YOU</p>
    </button>
  );
}

export default MovingButton;
