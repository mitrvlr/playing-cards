import React, { useEffect, useState } from 'react';

import ElementSearchbar from '../elements/Searchbar';
import { BsCheck } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { currentMember, currentSector, membersAtoms, selectedMembersAtom } from '../../store/atoms';

const SectorCreator = () => {
  const [member, setMember] = useRecoilState(currentMember);
  const [sector, setSector] = useRecoilState(currentSector);
  const [members, setMembers] = useRecoilState(membersAtoms);
  const [selectedMembers, setSelectedMembers] = useRecoilState(selectedMembersAtom);

  const onHandleChange = (member) => {
    setMember(member);
  };

  const onHandleSubmit = () => {
    console.log('[onHandleSubmit]');
  };

  useEffect(() => {
    if (!member) return;
    const otherMembers = selectedMembers.filter((value) => value?.id !== member?.id);
    const alreadyMember = selectedMembers.map((value) => value.id).includes(member?.id);
    setSelectedMembers(alreadyMember ? otherMembers : [...selectedMembers, { ...member, sectorId: sector?.id }]);
  }, [member]);

  return (
    <div className="editor">
      <ElementSearchbar placeholder="홍길동" />

      <div className="">
        <ul className="editor__entries">
          {members.map((member) =>
            !member?.locate.length || member?.sectorId === sector?.id ? (
              <li key={member.id}>
                <input
                  id={`label-${member.id}`}
                  className="a11y"
                  name={''}
                  type={'checkbox'}
                  defaultChecked={member?.sectorId === sector?.id}
                  onClick={() => onHandleChange(member)}
                />
                <label htmlFor={`label-${member.id}`}>
                  {member.title}
                  <BsCheck />
                </label>
              </li>
            ) : null
          )}

          {selectedMembers.map((member) =>
            !member?.locate.length || member?.sectorId === sector?.id ? (
              <li key={member.id}>
                <input
                  id={`label-${member.id}`}
                  className="a11y"
                  name={''}
                  type={'checkbox'}
                  defaultChecked={member?.sectorId === sector?.id}
                  onClick={() => onHandleChange(member)}
                />
                <label htmlFor={`label-${member.id}`}>
                  {member.title}
                  <BsCheck />
                </label>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};
export default SectorCreator;
