import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentSector, sectorsAtom, membersAtoms, selectedMembersAtom } from '../../store/atoms';

const ModuleSeat = ({ locate }) => {
  const [col, row] = locate;
  const [theme, setTheme] = useState(null);
  const [member, setMember] = useState(null);
  const [sectors, setSectors] = useRecoilState(sectorsAtom);
  const [members, setMembers] = useRecoilState(membersAtoms);
  const [sector, setSector] = useRecoilState(currentSector);
  const [selectedMembers, setSelectedMembers] = useRecoilState(selectedMembersAtom);

  const onHandleSeat = (e) => {
    const [firstMember, ...restMembers] = selectedMembers;
    const { id, locateCol, locateRow } = e.target.dataset;
    setTheme(sector ? sector?.theme : null);

    if (firstMember && sector) {
      setMember({ ...firstMember, locate: [locateCol, locateRow] });
      setSelectedMembers(sector ? restMembers : [...selectedMembers, firstMember]);
    }

    if (!sector) {
      const validMember = members.filter((value) => value.id === +id && value);
      setSelectedMembers([...selectedMembers, ...validMember]);
      e.target.removeAttribute('data-id');
    }
  };

  useEffect(() => {
    console.log('[members]', members);
    return () => {
      // effect
    };
  }, [members]);

  useEffect(() => {
    for (const m of members) {
      const [x, y] = m.locate;
      const exactLocate = col === x && row === y;
      exactLocate && setMember(m);
    }
  }, [col, members, row]);

  useEffect(() => {
    for (const s of sectors) {
      const exactTheme = s.id === member?.sectorId;
      exactTheme && setTheme(s.theme);
    }

    // const otherMembers = selectedMembers.filter((value) => value?.id !== member?.id);
    // const alreadyMember = selectedMembers.map((value) => value.id).includes(member?.id);
    //
    // console.log('[member]', alreadyMember, otherMembers);
  }, [sectors, member]);

  return (
    <label className="seat" onClick={onHandleSeat} style={{ backgroundColor: theme, color: theme }}>
      <input
        type="text"
        data-id={member?.id}
        data-locate-col={col}
        data-locate-row={row}
        className="seat__input"
        defaultValue={theme ? member?.title : ''}
        readOnly
      />
    </label>
  );
};

export default ModuleSeat;
