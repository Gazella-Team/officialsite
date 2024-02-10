import { useState, useEffect } from 'react';

const Follower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e:any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Cleanup the event listener on component unmount

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'blue',
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`, // Adjust for the dot's center
        }}
      />
    </div>
  );
};

export default Follower;
