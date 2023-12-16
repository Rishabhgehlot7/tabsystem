import React, { useRef, useState } from 'react';

const SwipeTabs = () => {
  const cardRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const tabWidth = 100; // Adjust as needed

  const handleMouseDown = (event) => {
    setStartX(event.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - startX;
    setCurrentTranslate((prevTranslate) => prevTranslate + deltaX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Determine the direction of the swipe (left or right)
    if (currentTranslate > tabWidth / 2) {
      // Swipe right, show the previous tab
      showPreviousTab();
    } else if (currentTranslate < -tabWidth / 2) {
      // Swipe left, show the next tab
      showNextTab();
    }

    setCurrentTranslate(0);
  };

  const showPreviousTab = () => {
    console.log('Show previous tab logic here');
    // Add your logic to switch to the previous tab
  };

  const showNextTab = () => {
    console.log('Show next tab logic here');
    // Add your logic to switch to the next tab
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.3s ease',
          transform: `translateX(${currentTranslate}px)`,
        }}
      >
        {/* Tab 1 */}
        <div style={{ width: '100%', flex: '0 0 100%' }}>
          <h2>Tab 1 Content</h2>
          {/* Add your content for Tab 1 */}
        </div>

        {/* Tab 2 */}
        <div style={{ width: '100%', flex: '0 0 100%' }}>
          <h2>Tab 2 Content</h2>
          {/* Add your content for Tab 2 */}
        </div>

        {/* Tab 3 */}
        <div style={{ width: '100%', flex: '0 0 100%' }}>
          <h2>Tab 3 Content</h2>
          {/* Add your content for Tab 3 */}
        </div>
      </div>
    </div>
  );
};

export default SwipeTabs;
