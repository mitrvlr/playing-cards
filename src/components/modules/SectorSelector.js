import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { AiFillPlusCircle } from 'react-icons/ai';

import { sectorsAtom, currentMember, currentSector, selectedMembersAtom, membersAtoms } from '../../store/atoms';

const SectorSelector = () => {
  const [selectedMembers, setSelectedMembers] = useRecoilState(selectedMembersAtom);
  const [member, setMember] = useRecoilState(currentMember);
  const [members, setMembers] = useRecoilState(membersAtoms);
  const [sector, setSector] = useRecoilState(currentSector);
  const [sectors] = useRecoilState(sectorsAtom);
  const [list, setList] = useState(sectors);

  const onSelectSector = (selected) => {
    const invalidSector = sector?.id !== selected.id;
    setList(sectors);
    setSector(invalidSector ? selected : null);
  };

  useEffect(() => {
    const selected = selectedMembers.map((value) => ({ ...value, sectorId: sector ? sector?.id : null }));
    setSelectedMembers([...selected]);
  }, [sector]);

  return (
    <div className="editor">
      <div className="selector">
        {list.map((item) => (
          <label
            key={item.id}
            htmlFor={`select-box-${item.id}`}
            className={`selector__label${item.id === sector?.id ? ' active' : ''}`}
            data-title={item.title}
          >
            <AiFillPlusCircle />
            <input id={`select-box-${item.id}`} className="a11y" onClick={() => onSelectSector(item)} />
          </label>
        ))}
      </div>
    </div>
  );
};
export default SectorSelector;
