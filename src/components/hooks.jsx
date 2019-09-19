

import React, { useState, useEffect } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");
  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }

return <button onClick={handleClick}>{buttonText}</button>
}

export function DataLoader() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("Mohammad");
  const urls = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(urls)
      .then(response => response.json())
      .then(data => setData(data));
     
  },[]);

  return (
    <div>
        <h1>{name}</h1>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
