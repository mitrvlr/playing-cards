import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentSector, sectorsAtom, membersAtoms } from '../../store/atoms';

const ModuleSeat = ({ locate, onSelectSeat }) => {
  const [col, row] = locate;
  const [theme, setTheme] = useState(null);
  const [member, setMember] = useState(null);

  const [sectors] = useRecoilState(sectorsAtom);
  const [members, setMembers] = useRecoilState(membersAtoms);
  const [sector] = useRecoilState(currentSector);

  const onHandleSeat = (e) => {
    setTheme(sector ? sector?.theme : null);
    onSelectSeat(e.target.dataset.locate);
  };

  useEffect(() => {
    for (const m of members) {
      const [x, y] = m.locate;
      const exactLocate = col === x && row === y;
      exactLocate && setMember(m);
    }

    return () => {
      // effect
    };
  }, [col, members, row]);

  return (
    <label
      className="seat"
      onClick={onHandleSeat}
      style={{ backgroundColor: theme, color: theme }}
    >
      <input
        type="text"
        data-locate-col={col}
        data-locate-row={row}
        className="seat__input"
        defaultValue={member?.title}
        readOnly
      />
    </label>
  );
};

export default ModuleSeat;
