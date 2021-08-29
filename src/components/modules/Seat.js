import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { sheetVersion1, currentSector } from '../../store/atoms';

const ModuleSeat = (props) => {
  const seatRef = useRef(null);
  const [organizationSheet] = useRecoilState(sheetVersion1);
  const [sector] = useRecoilState(currentSector);

  const deactiveSeatColor = '#f0f0f7';
  const activeSeatColor = sector?.theme || '#c9c9d4';

  const onSelectSeat = () => {
    const seatElem = seatRef.current;
    props.onSelectSeat(props.seatId);

    if (seatElem.dataset.sectorId) {
      delete seatElem.dataset.sectorId;
      seatElem.style.backgroundColor = deactiveSeatColor;
    } else {
      seatElem.dataset.sectorId = sector.id;
      seatElem.style.backgroundColor = activeSeatColor;
    }
  };

  useEffect(() => {
    const seatElem = seatRef.current;
    organizationSheet?.map((organization) => {
      organization.sheet.map((seat) => {
        if (seat.locate.toString() === seatElem.dataset.seatId) {
          seatElem.dataset.sectorId = organization.id;
          seatElem.style.backgroundColor = organization.color;
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
      disabled={!sector}
      onClick={onSelectSeat}
    >
      {/*홍길동*/}
    </button>
  );
};
export default ModuleSeat;
