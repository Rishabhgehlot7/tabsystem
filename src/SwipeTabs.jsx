import React, { useState, useEffect, useRef } from 'react';

const SwipeTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [startX, setStartX] = useState(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (startX === null) return;

      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeTab < 2) {
          // Swipe left, show the next tab
          setActiveTab(activeTab + 1);
        } else if (diff < 0 && activeTab > 0) {
          // Swipe right, show the previous tab
          setActiveTab(activeTab - 1);
        }

        setStartX(null);
      }
    };

    tabsRef.current.addEventListener('touchstart', handleTouchStart);
    tabsRef.current.addEventListener('touchmove', handleTouchMove);

    return () => {
      tabsRef.current.removeEventListener('touchstart', handleTouchStart);
      tabsRef.current.removeEventListener('touchmove', handleTouchMove);
    };
  }, [startX, activeTab]);

  return (
    <div ref={tabsRef}>
      {/* Tab Headers */}
      <div style={{ display: 'flex' }}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              cursor: 'pointer',
              fontWeight: activeTab === index ? 'bold' : 'normal',
            }}
            onClick={() => setActiveTab(index)}
          >
            Tab {index + 1}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ height: '200px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              width: '100%',
              flex: '0 0 100%',
              display: activeTab === index ? 'block' : 'none',
              height: '100%',
              backgroundColor: index === 0 ? 'lightblue' : index === 1 ? 'lightgreen' : 'lightcoral',
            }}
          >
            <h2>Tab {index + 1} Content</h2>
            {/* Add your content for each tab */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeTabs;
