import React, { useEffect, useRef, useState } from 'react';

import ElementSearchbar from '../elements/Searchbar';
import { BsCheck } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { currentMember, currentSector, membersAtoms, selectedMembersAtom } from '../../store/atoms';

const SectorCreator = () => {
  const [rookie, setRookie] = useState('');
  const [member, setMember] = useRecoilState(currentMember);
  const [sector, setSector] = useRecoilState(currentSector);
  const [members, setMembers] = useRecoilState(membersAtoms);
  const [selectedMembers, setSelectedMembers] = useRecoilState(selectedMembersAtom);
  const ref = useRef(3);

  const onHandleChange = (member) => {
    setMember(member);
  };

  const onHandleMember = (e) => {
    setRookie(e.target.value);
  };

  const onHandleAddMember = () => {
    setMembers([
      ...members,
      {
        id: ++ref.current,
        title: rookie,
        sectorId: sector ? sector.id : null,
        locate: [],
      },
    ]);

    setRookie('');
  };

  useEffect(() => {
    if (!member) return;
    const otherMembers = selectedMembers.filter((value) => value?.id !== member?.id);
    const alreadyMember = selectedMembers.map((value) => value.id).includes(member?.id);
    setSelectedMembers(alreadyMember ? otherMembers : [...selectedMembers, { ...member, sectorId: sector?.id }]);
  }, [member]);

  return (
    <>
      <h2 className="editor__title">멤버 선택</h2>
      <div className="editor">
        <ElementSearchbar
          placeholder="홍길동"
          value={rookie}
          onChange={(e) => onHandleMember(e)}
          onSearchValue={() => onHandleAddMember()}
        />

        <div className="">
          <ul className="editor__entries">
            {members.map((member) => (
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
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectorCreator;
