import React, { useEffect }  from 'react';
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
    const alreadySelected = selectedSeats.find((id) => id === seatId);
    const filteredSeats = selectedSeats.filter((id) => id !== seatId);

    setSelectedSeats((state) => alreadySelected ? [...filteredSeats] : [...state, seatId]);
  };

  useEffect(() => {
    console.log(selectedSeats);
  }, [selectedSeats]);

  return (
    <div className="sheet">
      {rowLocateMap?.map((row) => (
        <div className="sheet__row" key={row}>
          {colLocateMap?.map((col) => (
            <ModuleSeat key={col} seatId={`${row},${col}`} onSelectSeat={onSelectSeat} />
          ))}
        </div>
      ))}
    </div>
  );
};
export default ModuleSheet;
