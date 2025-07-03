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
        format={(date: Date | null) => {
          if (!date) return '';
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          const dayStr = day < 10 ? "0" + day : day.toString();
          const monthStr = month < 10 ? "0" + month : month.toString();

          return [year, monthStr, dayStr].join('-');
        }}
        parse={(str: string) => {
          const yearMonthDay = str.split('-');
          return new Date(parseInt(yearMonthDay[0]), parseInt(yearMonthDay[1]) - 1, parseInt(yearMonthDay[2]));
        }}
        min={new Date(2000, 0, 1)}  // defaults to `1900-01-01`
        max={new Date(2020, 0, 1)}  // defaults to `9999-01-01`
        autofix={true}
        lazy={false}
        overwrite={true}
        className="date-input"
      />
    </div>
  );
};

export default ReactImaskDemo;