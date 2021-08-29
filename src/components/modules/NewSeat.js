import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentSector, sectorsAtom, membersAtoms } from '../../store/atoms';

const ModuleSeat = ({ locate, onSelectSeat }) => {
  const [theme, setTheme] = useState(null);

  const [sectors] = useRecoilState(sectorsAtom);
  const [members] = useRecoilState(membersAtoms);
  const [sector] = useRecoilState(currentSector);

  const onHandleSeat = (e) => {
    setTheme(sector ? sector?.theme : null);
    onSelectSeat(e.target.dataset.locate);
  };

  useEffect(() => {
    return () => {
      // effect
    };
  }, [sectors]);

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
