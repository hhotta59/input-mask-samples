import React from 'react';
import { withMask } from 'use-mask-input';

const UseMaskInputDemo: React.FC = () => {
  return (
    <div className="demo-section">
      <h2>use-mask-input</h2>
      <input
        ref={withMask('datetime', {
          inputFormat: 'yyyy/mm/dd',
          placeholder: '_',
        })}
        className="date-input"
      />
    </div>
  );
};

export default UseMaskInputDemo;