import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { AiOutlineClose } from 'react-icons/ai';

import ElementInput from '../elements/Input';
import ElementButton from '../elements/Button';

import { sheetMap } from '../../store/atoms';

const SheetCreator = () => {
  const [sheet, setSheet] = useRecoilState(sheetMap);
  const [locate, setLocate] = useState(sheet);

  const onChangeSheet = (e) => {
    const { id, value } = e.target;
    const [col, row] = locate;
    const isColumn = id === 'col';

    setLocate(isColumn ? [value, row] : [col, value]);
  };

  const onApplySheet = () => {
    setSheet(locate);
  };

  return (
    <div className="sheet-creator">
      <div className="sheet-creator__field">
        <ElementInput
          id="col"
          type="number"
          value={sheet[0]}
          placeholder="col"
          onChange={onChangeSheet}
        />
        <AiOutlineClose size="3rem" color="#f65077" className="icon" />
        <ElementInput
          id="row"
          type="number"
          value={sheet[1]}
          placeholder="row"
          onChange={onChangeSheet}
        />
      </div>

      <div className="btn-set btn-set--content">
        <ElementButton
          isAdded
          className="btn--thin btn--wide"
          callback={onApplySheet}
        >
          ADD
        </ElementButton>
      </div>
    </div>
  );
};
export default SheetCreator;
