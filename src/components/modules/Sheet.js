import React, { useState, useEffect } from 'react';
import ModuleSeat from './Seat';

const ModuleSheet = (props) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectSeat = (seatId) => {
    if (selectedSeats.find((id) => id === seatId)) return;
    setSelectedSeats((state) => {
      return [
        ...state,
        seatId,
      ];
    });
  };

  const updateSector = () => {
    // 섹터 정보 저장 (부서, 좌석)
    console.log(props.selectedOrganizationInfo, selectedSeats);

    // 좌석 시트 해당 부서 컬러로 변경
    console.log(props.selectedOrganizationInfo.color);
  };

  useEffect(() => {
    if (props.selectedOrganizationInfo) {
      updateSector();
    }
  }, [props.selectedOrganizationInfo]);

  return (
    <div style={{ margin: '5rem' }}>
      <div className="sheet" style={{ width: '50rem', margin: '0 auto'}}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((seatId) => (
          <ModuleSeat key={seatId} seatId={seatId} selectSeat={selectSeat} />
        ))}
      </div>
    </div>
  );
}
export default ModuleSheet;