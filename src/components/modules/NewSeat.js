import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { currentSector } from '../../store/atoms';

const ModuleSeat = ({ locate, onSelectSeat }) => {
  const [theme, setTheme] = useState(null);

  const [sector] = useRecoilState(currentSector);

  const onHandleSeat = (e) => {
    if (!sector) return;
    setTheme(sector?.theme);
    onSelectSeat(e.target.dataset.locate);
  };

  return (
    <label
      className="seat"
      onClick={onHandleSeat}
      style={{ backgroundColor: theme, color: theme }}
    >
      <input
        type="text"
        data-locate={locate}
        className="seat__input"
        readOnly
      />
    </label>
  );
};

export default ModuleSeat;
