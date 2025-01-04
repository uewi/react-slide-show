import React from 'react';
import { useState } from 'react';

function Slides({ messages }) {
  const [slide, setSlide] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    display: 'flex',
    height: '40px',
    aspectRatio: '1',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };

  const active = {
    border: '1px solid blue',
    color: '#000',
  };

  function handlePrevious() {
    if (slide > 1) {
      setSlide((s) => s - 1);
    }
  }

  function handleNext() {
    if (slide < messages.length) {
      setSlide((s) => s + 1);
    }
  }

  return (
    <div>
      <button
        style={{
          top: '20px',
          right: '20px',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          fontSize: '40px',
          color: isHovered ? 'red' : 'inherit',
        }}
        onClick={() => setIsOpen((is) => !is)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        &times;
      </button>
      {isOpen && (
        <div
          style={{
            width: '400px',
            borderRadius: '5px',
            padding: '50px 50px',
            margin: '50px auto',
            border: '1px solid black',
          }}
        >
          {messages
            .filter((_, index) => index === slide - 1)
            .map((message) => {
              return (
                <p
                  key={message.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    fontSize: '20px',
                    margin: '40px 0',
                    alignItems: 'center',
                  }}
                >
                  {message.title}
                </p>
              );
            })}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button onClick={handlePrevious}>Previous</button>
            <div>
              <div
                style={{
                  ...styles,
                  ...(slide >= 1 ? active : {}),
                }}
              >
                {slide}
              </div>
            </div>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slides;
