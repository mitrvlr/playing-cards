import React, { useState } from 'react';
import ElementButton from '../elements/Button';
import { BsCheck } from 'react-icons/bs';

const ModuleSelectBox = (props) => {
  const [selectItem, setSelectItem] = useState(null);

  const onClickItem = (item) => {
    setSelectItem(item);
  };

  const onSubmit = () => {
    props.onSubmit(selectItem);
  };

  return (
    <div className="select-box">
      {props.children}

      <ul className="select-box__list">
        {props.list?.map((item) => (
          <li key={item.id} onClick={() => onClickItem(item)}>
            <input
              id={`select-box-${item.id}`}
              className="a11y"
              name={props.listLabel || ''}
              type={props.listType || 'checkbox' }
            />
            <label htmlFor={`select-box-${item.id}`}>
              <BsCheck />{item.title}
            </label>
          </li>
        ))}
      </ul>

      {props.notificationLabel && (
        <p
          className="select-box__notify"
          dangerouslySetInnerHTML={ {__html: props.notificationLabel} }
        />
      )}

      <div className="btn-set btn-set--content">
        <ElementButton
          isChecked
          disabled={!selectItem}
          className="btn--thin"
          callback={onSubmit}
        >
          {props.confirmLabel}
        </ElementButton>
      </div>
    </div>
  );
};

export default ModuleSelectBox;