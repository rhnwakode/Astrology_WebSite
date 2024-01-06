import React from 'react';

const SouthIndian = ({ svgData }: { svgData: string }) => {
  console.log(svgData);

  return (
    <div>
      <h3>south</h3>
      <img src={svgData} style={{ width: '60%' }} />
    </div>
  );
};

export default SouthIndian;
