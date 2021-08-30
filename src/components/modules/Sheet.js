import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import ModuleSeat from './Seat';
import { sheetMap, selectedSeatMap } from '../../store/atoms';

const ModuleSheet = () => {
  const [sheet] = useRecoilState(sheetMap);
  const [selectedSeats, setSelectedSeats] = useRecoilState(selectedSeatMap);

  const [col, row] = sheet;
  const colLocateMap = Array.from({ length: col }, (v, i) => i);
  const rowLocateMap = Array.from({ length: row }, (v, i) => i);

  const onSelectSeat = (seatId) => {
    // 이미 선택된 시트를 선택 할 경우, 선택이 취소됨.
    // const alreadySelected = selectedSeats/**/.find((id) => id === seatId);
    // const filteredSeats = selectedSeats.filter((id) => id !== seatId);

    setSelectedSeats((state) => [...state, seatId]);
  };

  const locateMap = Array.from({ length: col * row }, (v, i) => {
    const x = Math.floor(i / col);
    const y = i - col * Math.floor(i / col);
    return [x, y];
  });

  useEffect(() => {}, [selectedSeats]);

  return (
    <div
      className="sheet"
      style={{
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
      }}
    >
      {locateMap.map((locate) => (
        <ModuleSeat key={locate} locate={locate} onSelectSeat={onSelectSeat} />
      ))}
    </div>
  );
};
export default ModuleSheet;
