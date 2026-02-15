import React from 'react';
import { useSelector } from 'react-redux';

function StutentDetail() {
  const details = useSelector((state) => state.data.arr);

  return (
    <div>
      <h1>Details</h1>

      {details.length === 0 && <p>No data found</p>}

      <ul>
        {details.map((val, index) => (
          <li key={index}>
            {val.name} | {val.birth} | {val.phone} | {val.degree}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StutentDetail;
