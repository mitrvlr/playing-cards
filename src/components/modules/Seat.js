import React, { useRef } from 'react';


const ModuleSeat = (props) => {
  const seatRef = useRef(null);

  const onClick = () => {
    const seatElem = seatRef.current;
    seatElem.style.backgroundColor = '#C9C9D4';
    props.selectSeat(props.seatId);
  };

  return (
    <button id={props.seatId} ref={seatRef} className="seat" onClick={onClick}>
      {/*홍길동*/}
    </button>
  );
}
export default ModuleSeat;