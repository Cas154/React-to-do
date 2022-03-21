import React, { useState } from "react";

const heading = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <div>de teller staat momenteel op: {count}</div>
      <button onClick={() => setcount(count + 1)}>eentje erbij!</button>
    </div>
  );
};
export default heading;
