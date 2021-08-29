import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import ModuleSeat from './Seat';
import { sheetMap } from '../../store/atoms';

const ModuleSheet = () => {
  const [sheet] = useRecoilState(sheetMap);
  const [col, row] = sheet;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectSeat = (seatId) => {
    if (selectedSeats.find((id) => id === seatId)) return;
    setSelectedSeats((state) => {
      return [...state, seatId];
    });
  };

  const locateMap = Array.from({ length: col * row }, (v, i) => i);

  return (
    <div
      className="sheet"
      style={{
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
      }}
    >
      {locateMap.map((seatId) => (
        <ModuleSeat key={seatId} seatId={seatId} selectSeat={selectSeat} />
      ))}
    </div>
  );
};
export default ModuleSheet;
