import React, { useRef, useState } from 'react';

const SwipeTabs = () => {
  const cardRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [activeTab, setActiveTab] = useState(1); // Initial active tab

  // Minimum distance required for a swipe gesture
  const minSwipeDistance = 50;

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;

    // Calculate the distance moved during the swipe
    const distance = endX - startX;

    // Determine the direction of the swipe (left or right)
    if (distance > minSwipeDistance) {
      // Swipe right, show the previous tab
      showPreviousTab();
    } else if (distance < -minSwipeDistance) {
      // Swipe left, show the next tab
      showNextTab();
    }
  };

  // Function to show the previous tab
  const showPreviousTab = () => {
    setActiveTab((prevTab) => Math.max(prevTab - 1, 1));
  };

  // Function to show the next tab
  const showNextTab = () => {
    setActiveTab((prevTab) => Math.min(prevTab + 1, 3));
  };

  return (
    <div
      ref={cardRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.3s ease',
          transform: `translateX(-${(activeTab - 1) * 100}%)`,
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
