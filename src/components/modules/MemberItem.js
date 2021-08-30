import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { BsCheck } from 'react-icons/bs/index';
import { currentSectorInfo, selectedSeatMap, sheetVersion1 } from '../../store/atoms';

const MemberItem = ({ memberInfo }) => {
  const [checked, setChecked] = useState(false);
  const [organizationSheet, setOrganizationSheet] = useRecoilState(sheetVersion1);
  const [currentSector] = useRecoilState(currentSectorInfo);
  const [selectedSeats, setSelectedSeats] = useRecoilState(selectedSeatMap);

  const cloneSheetInfo = JSON.parse(JSON.stringify(organizationSheet));
  const selectedLocate = selectedSeats?.length && selectedSeats;

  const onChangeCheckbox = (e) => {
    const { checked } = e.target;
    setChecked(checked);

    // 이미 배치된 임직원 선택 시 배치 해제
    if (checkAlreadyAssignedMember()) {
      return;
    }
    assignSeatToMember();
  };

  const checkAlreadyAssignedMember = () => {
    const currentSheet = organizationSheet[currentSector.id];
    const alreadyAssignedMemberIndex = currentSheet?.sheet.findIndex((seat) => seat.member === memberInfo.name);
    const alreadyAssignedMember = alreadyAssignedMemberIndex > -1;
    const cloneSheetInfo = JSON.parse(JSON.stringify(organizationSheet));

    if (alreadyAssignedMember) {
      const assignedMemberInfo = currentSheet?.sheet[alreadyAssignedMemberIndex];

      cloneSheetInfo[currentSector.id].sheet[alreadyAssignedMemberIndex] = { ...assignedMemberInfo, member: null};
      setOrganizationSheet(cloneSheetInfo);
    }
    return alreadyAssignedMember;
  };

  const assignSeatToMember = () => {
    // 선택한 임직원을 선택된 좌표 : 예약 좌석 배치
    const sheetInfo = selectedLocate ? assignToSelectedLocate(memberInfo) : assignToReservedLocate(memberInfo);
    if (sheetInfo) {
      setOrganizationSheet(sheetInfo);
    }
    setSelectedSeats([]);
  };

  const assignToSelectedLocate = () => {
    const { id } = currentSector;
    const currentSheetInfo = cloneSheetInfo[id];

    cloneSheetInfo[id].sheet = currentSheetInfo.sheet.map((seat) => {
      return seat.locate.toString() === selectedLocate ? { ...seat, member: memberInfo.name } : { ...seat };
    });
    return cloneSheetInfo;
  };

  const assignToReservedLocate = () => {
    const { id } = currentSector;
    const currentSheetInfo = cloneSheetInfo[id];
    const reservedSeat = currentSheetInfo?.sheet.find((seat) => !seat.member);
    if (!reservedSeat) return alert('해당 소속에 배정할 좌석이 없습니다. 구역을 추가하세요.');

    cloneSheetInfo[id].sheet = currentSheetInfo.sheet.map((seat) => {
      return reservedSeat.seatId === seat.seatId ? { ...seat, member: memberInfo.name } : { ...seat };
    });
    return cloneSheetInfo;
  };

  useEffect(() => {
    const isAssignedMember = organizationSheet.some((sheets) =>  {
      return sheets.sheet.some((seat) => seat.member === memberInfo.name);
    });
    setChecked(isAssignedMember);
  }, [organizationSheet]);

  return (
    <li key={memberInfo.memberId}>
      <input
        id={`member-${memberInfo.memberId}`}
        className="a11y"
        name="member"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChangeCheckbox(e)}
      />
      <label htmlFor={`member-${memberInfo.memberId}`}>
        <BsCheck />{memberInfo.name}
      </label>
    </li>
  );
};
export default MemberItem;