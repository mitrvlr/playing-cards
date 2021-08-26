import React from 'react';
import ElementButton from '../components/elements/Button';
import ModuleDropdown from '../components/modules/Dropdown';
import ElementIcon from '../components/elements/Icon';
import ElementSearchbar from '../components/elements/Searchbar';

const dropdownList = [
  {
    id: 0,
    name: '개발실',
  },
  {
    id: 1,
    name: '기획팀',
  },
];

const Playground = () => {
  return (
    <section>
      <h2>Playground</h2>

      {/* Buttons */}
      <div>
        <ElementButton addSheet>ADD SHEET</ElementButton>
        <ElementButton addSector className="btn--secondary">ADD SECTOR</ElementButton>
        <ElementButton disabled>DISABLED</ElementButton>
        <ElementButton isAdded className="btn--thin">ADD</ElementButton>
        <ElementButton isChecked className="btn--thin btn--secondary">CONFIRM</ElementButton>
        <ElementButton isChecked className="btn--ghost">CONFIRM</ElementButton>
        <ElementButton isAdded className="btn--ghost">ADD SOMETHING</ElementButton>
      </div>

      {/* Icon Button */}
      <div>
        <ModuleDropdown id="dropdown" label="DROPDOWN" list={dropdownList} />
        <ModuleDropdown id="select-box" label="SELECT BOX" list={dropdownList} search />
      </div>

      {/*  Dropdown */}
      <div>
        <ElementIcon isAdded />
        <ElementIcon isAdded className="icon-btn--primary" />
        <ElementIcon isRemoved />
        <ElementIcon isRemoved className="icon-btn--primary" />
      </div>

      {/* Form */}
      <div>
        <ElementSearchbar />
      </div>
    </section>
  );
}
export default Playground;