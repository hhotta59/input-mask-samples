import React from 'react';
import { IMask, IMaskInput } from 'react-imask';

const ReactImaskDemo: React.FC = () => {
  return (
    <div className="demo-section">
      <h2>react-imask</h2>
      <IMaskInput
        mask={Date}
        pattern="Y-`m-`d"
        blocks={
          {
            Y: {
              mask: IMask.MaskedRange,
              from: 1900,
              to: 2100,
            },
            m: {
              mask: IMask.MaskedRange,
              from: 1,
              to: 12,
            },
            d: {
              mask: IMask.MaskedRange,
              from: 1,
              to: 31,
            },
          }
        }
        className="date-input"
      />
    </div>
  );
};

export default ReactImaskDemo;