import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import useForm from '../../hooks/useForm';
import ElementInput from '../elements/Input';
import ElementButton from '../elements/Button';
import { BsChevronDown, BsFillGrid3X3GapFill } from 'react-icons/bs/index';

const initForm = {
  col: null,
  row: null,
};

const SheetCreator = (props) => {
  const [form, onChangeInput] = useForm(initForm);
  const [showDropdown, toggleDropdown] = useState(false);

  const onToggleDropdown = () => {
    toggleDropdown((state) => !state);
  };

  const onAddSheet = () => {
    if (!form.col || !form.row) {
      return alert('입력 값을 확인해주세요.');
    }
    // 시트 블럭 생성
    alert(`${form.col} x ${form.row}`);
    toggleDropdown(false);
    // props.addSheet(form);
  };

  return (
    <div className="dropdown sheet-creator">
      <input id="dropdown__sheet-creator" type="checkbox" className="a11y dropdown__trigger" checked={showDropdown} onChange={onToggleDropdown} />
      <label htmlFor="dropdown__sheet-creator" className="dropdown__label btn">
        <BsFillGrid3X3GapFill />
        ADD SHEET
        <BsChevronDown className="icon icon--dropdown" size="1.2rem" />
      </label>

      <div className="dropdown__content select-box">
        <div className="sheet-creator__field">
          <ElementInput id="col" type="number" value={form.col}  placeholder="col" onChange={onChangeInput} />
          <AiOutlineClose size="3rem" color="#f65077" className="icon" />
          <ElementInput id="row" type="number" value={form.row} placeholder="row" onChange={onChangeInput} />
        </div>

        <p className="sheet-creator__notify">
          가로 <strong>{form.col || 0}</strong> 행,
          세로 <strong>{form.row || 0}</strong> 열의 좌석 시트를 생성합니다.
        </p>

        <div className="btn-set btn-set--content">
          <ElementButton isAdded className="btn--thin" callback={onAddSheet}>ADD</ElementButton>
        </div>
      </div>
    </div>
  );
};
export default SheetCreator;