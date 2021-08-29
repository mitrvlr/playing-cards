import React, { useRef, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { sheetMapMode, sheetVersion1, currentSectorInfo } from '../../store/atoms';


const ModuleSeat = (props) => {
  const seatRef = useRef(null);
  const [sheetMode] = useRecoilState(sheetMapMode);
  const [organizationSheet] = useRecoilState(sheetVersion1);
  const [currentSector] = useRecoilState(currentSectorInfo);
  const [employee, setEmployee] = useState({ title: '', name: '' });

  const deactiveSeatColor = '#f0f0f7';
  const activeSeatColor = currentSector?.color || '#c9c9d4';
  const isAbleButtonState = currentSector || sheetMode !== 'ADD_SECTOR';

  const onSelectSeat = () => {
    const seatElem = seatRef.current;

    if (!sheetMode) {
      return props.onClickSeat(props.seatId);
    }

    if (seatElem.dataset.sectorId) {
      delete seatElem.dataset.sectorId;
      seatElem.style.backgroundColor = deactiveSeatColor;
    } else {
      seatElem.dataset.sectorId = currentSector.id;
      seatElem.style.backgroundColor = activeSeatColor;
    }
    props.onClickSector(props.seatId);
  };

  useEffect(() => {
    const seatElem = seatRef.current;

    organizationSheet?.map((organization) => {
      organization.sheet.map((seat) => {
        const isAssignedSeat = seat.locate.toString() === seatElem.dataset.seatId;

        if (isAssignedSeat) {
          seatElem.dataset.sectorId = organization.id;
          seatElem.style.backgroundColor = organization.color;
          setEmployee({ title: organization.title, name: seat.member});
          // todo: sector id 가 존재하지않는 시트는 disabled 처리 필요
        }
        if (isAssignedSeat && !seat.member) {
          seatElem.classList.add('seat--reserved');
        }
      });
    });
  }, [organizationSheet]);

  return (
    <button
      ref={seatRef}
      className="seat"
      data-seat-id={props.seatId}
      style={{ backgroundColor: deactiveSeatColor }}
      disabled={!isAbleButtonState}
      onClick={onSelectSeat}
    >
      <span className="seat__label">{employee.title}</span>
      {employee.name}
    </button>
  );
}
export default ModuleSeat;