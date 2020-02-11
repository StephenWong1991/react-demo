import React, { useState } from 'react';

function About() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>About page</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default About