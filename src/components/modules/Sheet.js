import React from 'react';
import { useRecoilState } from 'recoil';

import ModuleSeat from './Seat';
import { sheetMap } from '../../store/atoms';

const ModuleSheet = () => {
  const [sheet] = useRecoilState(sheetMap);

  const [col, row] = sheet;
  const colLocateMap = Array.from({ length: col }, (v, i) => i);
  const rowLocateMap = Array.from({ length: row }, (v, i) => i);

  return (
    <div className="sheet">
      {rowLocateMap?.map((row) => (
        <div className="sheet__row" key={row}>
          {colLocateMap?.map((col) => (
            <ModuleSeat key={col} seatId={`${row},${col}`} />
          ))}
        </div>
      ))}
    </div>
  );
};
export default ModuleSheet;
