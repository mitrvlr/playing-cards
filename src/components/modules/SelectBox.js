import React from 'react';
import ElementButton from '../elements/Button';

const ModuleSelectBox = (props) => {

  return (
    <div className="select-box">
      {props.children}
      <ul className="select-box__list">
        {props.list?.map((item) => (
          <li key={item.id} onClick={() => props.onClickItem(item)}>
            <input
              id={`select-box-${item.id}`}
              className="a11y"
              type={props.listType || 'checkbox' }
              name={props.listLabel || ''}
            />
            <label htmlFor={`select-box-${item.id}`}>{item.name}</label>
          </li>
        ))}
      </ul>

      {props.notificationLabel && (
        <p className="select-box__notify" dangerouslySetInnerHTML={ {__html: props.notificationLabel} } />
      )}

      <div className="btn-set btn-set--content">
        {props.isCancel && (
          <ElementButton
            isCancel
            className="btn--thin btn--secondary"
            callback={props.onCancel}
          />
        )}
        {props.isConfirm && (
          <ElementButton
            isChecked
            className="btn--thin btn--secondary"
            callback={props.onSubmit}
          >
            {props.confirmLabel}
          </ElementButton>
        )}
      </div>
    </div>
  );
};

export default ModuleSelectBox;