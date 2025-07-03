import React from 'react';
import { useMask } from '@react-input/mask';

const ReactInputMaskDemo: React.FC = () => {
  const inputRef = useMask({ mask: '____/__/__', replacement: { _: /\d/ } });

  return (
    <div className="demo-section">
      <h2>@react-input/mask</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="____/__/__"
        className="date-input"
      />
    </div>
  );
};

export default ReactInputMaskDemo;