import React, { useState, useEffect } from 'react';

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const startTimer = () => {
    setShowTime(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='container'>
      <button onClick={startTimer}>Показать время</button>
      {showTime && (
        <>
        <h1>Текущее время</h1>
        <p>{currentTime.toLocaleTimeString()}</p>
        </>
      )}
    </div>
  );
}


