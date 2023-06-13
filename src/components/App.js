import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');

  function handleClick(key) {
    setValue(prevValue => prevValue + key);
  }

  useEffect(() => {
    function fetchData() {
      fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => setData(data.content));
    }
    fetchData();
  }, []);

  return (
    <>
      {value === "forty two" ? (
        <div className="quote">{data}</div>
      ) : (
        <div className="keyboard">
          <div className="preview">{value}</div>
          <div>
            {keys.map((key) => (
              <button
                onClick={() => handleClick(key)}
                key={key}
                id={key === " " ? `key-space` : `key-${key}`}
              >
                {key === " " ? "Space" : key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default App;