import React, { useRef, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { sheetMapMode, sheetVersion1, currentSectorInfo, selectedSeatMap, organizationList } from '../../store/atoms';
import { SheetMode } from '../../policy';

const initMember = { title: '', name: '' };

const ModuleSeat = (props) => {
  const seatRef = useRef(null);
  const [member, setMember] = useState(initMember);
  const [sheetMode, setSheetMode] = useRecoilState(sheetMapMode);
  const [organizations] = useRecoilState(organizationList);
  const [organizationSheet, setOrganizationSheet] = useRecoilState(sheetVersion1);
  const [currentSector, setCurrentSector] = useRecoilState(currentSectorInfo);
  const [selectedSeats, setSelectedSeats] = useRecoilState(selectedSeatMap);

  const deactiveSeatColor = '#f0f0f7';
  const activeSeatColor = currentSector?.color || '#c9c9d4';
  const isActiveSeatButton = currentSector || sheetMode !== SheetMode.SELECT_SECTOR;

  const onSelectSeat = () => {
    const isAssignedSectorId = seatRef.current.dataset.sectorId;
    const isSeatAssignableMode = !sheetMode || sheetMode === SheetMode.SELECT_MEMBER;
    const alreadyAssignedSeat = isAssignedSectorId && isAssignedSectorId !== currentSector?.id.toString();

    // assign member
    if (isSeatAssignableMode && isAssignedSectorId) {
      return assignSeatToMember();
    }

    // blocked assign
    if (alreadyAssignedSeat || (!isAssignedSectorId && sheetMode !== SheetMode.ASSIGN_SECTOR)) {
      return;
    }

    // assign sector
    assignSectorToSeat();
    updateSeatStyle();
  };

  const assignSeatToMember = () => {
    const isAssignedSectorId = seatRef.current.dataset.sectorId;
    const selectedSector = organizationSheet.find((sheet) => sheet.id.toString() === isAssignedSectorId);

    setSheetMode(SheetMode.SELECT_MEMBER);
    setCurrentSector(selectedSector);
    setSelectedSeats(props.seatId);
  };

  const updateSeatStyle = () => {
    const seatElem = seatRef.current;
    const isAssignedSectorId = seatElem.dataset.sectorId;

    if (isAssignedSectorId) {
      delete seatElem.dataset.sectorId;
      seatElem.style.backgroundColor = deactiveSeatColor;
    } else {
      seatElem.dataset.sectorId = currentSector.id;
      seatElem.style.backgroundColor = activeSeatColor;
    }
  };

  const assignSectorToSeat = () => {
    const cloneSheetInfo = JSON.parse(JSON.stringify(organizationSheet));
    const isExistedSector = organizationSheet.some((sheet) => sheet.id === currentSector.id);
    const currentSectorSheets = isExistedSector && organizationSheet[currentSector.id].sheet;
    const selectedSectorInfo = organizations.find((organization) => organization.id === currentSector.id);

    const isAlreadySelected = selectedSeats.some((seat) => seat === props.seatId);
    const filteredSelectedSheets = selectedSeats.filter((seat) => seat !== props.seatId);

    const isAlreadyAssigned = currentSectorSheets && currentSectorSheets.some((sheet) => sheet.locate.toString() === props.seatId);
    const filteredAssignedSheets = currentSectorSheets && currentSectorSheets.filter((sheet) => sheet.locate.toString() !== props.seatId);

    // seat select : unselect
    setSelectedSeats((state) => isAlreadySelected ? [...filteredSelectedSheets] : [...state, props.seatId]);

    if (isAlreadyAssigned) {
      cloneSheetInfo[currentSector.id].sheet = filteredAssignedSheets;
      setOrganizationSheet(cloneSheetInfo);
      return;
    }

    const seatId = isExistedSector ? organizationSheet[currentSector.id].sheet.length : 0;
    const seatInfo = { seatId, member: null, locate: props.seatId.split(',').map((i) => Number(i)) };

    // update sector : add new sector
    if (isExistedSector) {
      cloneSheetInfo[currentSector.id].sheet = [...currentSectorSheets, seatInfo];
    } else {
      const { id, title, color } = selectedSectorInfo;
      cloneSheetInfo.push({ id, title, color, sheet: [seatInfo] });
    }
    setOrganizationSheet(cloneSheetInfo);
    setSelectedSeats([]);
  };

  const initSeatStyle = () => {
    const seatElem = seatRef.current;
    const isAssignedSeatId = seatElem.dataset.seatId;

    setMember(initMember);
    organizationSheet?.map((sheet) => {
      sheet.sheet.map((seat) => {
        const isAssignedSeat = seat.locate.toString() === isAssignedSeatId;

        if (!isAssignedSeat) return;
        if (seat.member) {
          seatElem.classList.remove('seat--reserved');
        } else {
          seatElem.classList.add('seat--reserved');
        }
        seatElem.dataset.sectorId = sheet.id;
        seatElem.style.backgroundColor = sheet.color;
        setMember({ title: sheet.title, name: seat.member});
      });
    });
  };

  useEffect(() => {
    initSeatStyle();
  }, [organizationSheet]);

  return (
    <button
      ref={seatRef}
      className="seat"
      data-seat-id={props.seatId}
      style={{ backgroundColor: deactiveSeatColor }}
      disabled={!isActiveSeatButton}
      onClick={onSelectSeat}
    >
      <span className="seat__label">{member.title}</span>
      {member.name}
    </button>
  );
}
export default ModuleSeat;