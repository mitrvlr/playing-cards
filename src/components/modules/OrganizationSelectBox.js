import React, { useState } from 'react';
import ElementButton from '../elements/Button';
import { BsCheck } from 'react-icons/bs';

const OrganizationSelectBox = (props) => {
  const [selectItem, setSelectItem] = useState(null);

  const onClickItem = (item) => {
    if (props.isDepth) return;

    setSelectItem(item);
    props.onClickItem && props.onClickItem(item);
  };

  const onClickSubItem = (item) => {
    setSelectItem(item);
    props.onClickSubItem && props.onClickSubItem(item);
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
              id={`${props.listLabel}-${item.id}`}
              className="a11y"
              name={props.listLabel || ''}
              type={props.listType || 'checkbox' }
            />
            <label htmlFor={`${props.listLabel}-${item.id}`}><BsCheck />{item.title}</label>

            {(props.isDepth && item.member?.length) && (
              <ul className="select-box__list">
                {item.member.map((subItem) => (
                  <li key={subItem.memberId} onClick={() => onClickSubItem(item)}>
                    <input
                      id={`${props.listLabel}-${item.id}-${subItem.memberId}`}
                      className="a11y"
                      name={props.subListLabel || ''}
                      type={props.subListType || 'checkbox' }
                    />
                    <label htmlFor={`${props.listLabel}-${item.id}-${subItem.memberId}`}>
                      <BsCheck />{subItem.name}
                    </label>
                  </li>
                  )
                )}
              </ul>
            )}
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

export default OrganizationSelectBox;