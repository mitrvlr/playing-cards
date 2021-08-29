import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { AiFillMinusCircle } from 'react-icons/ai';

import { organizationList, currentSector } from '../../store/atoms';

const SectorSelector = () => {
  const [sector, setSector] = useRecoilState(currentSector);

  const [organizations] = useRecoilState(organizationList);
  const [list, setList] = useState(organizations);

  const onSelectSector = (sector) => {
    setList(organizations);
    setSector(sector);
  };

  return (
    <div className="editor">
      <div className="selector">
        {list.map((item) => (
          <label
            key={item.id}
            htmlFor={`select-box-${item.id}`}
            className="selector__label"
            data-title={item.title}
          >
            <AiFillMinusCircle />
            <input
              id={`select-box-${item.id}`}
              className="a11y"
              onClick={() => onSelectSector(item)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
export default SectorSelector;
