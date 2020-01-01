import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} number of times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default App;
