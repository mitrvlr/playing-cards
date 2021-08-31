import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';
import SectorSelector from '../modules/SectorSelector';
import MemberSelector from '../modules/MemberSelector';
import ElementButton from '../elements/Button';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
      <SectorSelector />
      <MemberSelector />

      <div className="btn__group">
        <ElementButton isChecked disabled className="btn--secondary btn--wide">
          SAVE
        </ElementButton>

        <ElementButton isChecked disabled className="btn--secondary btn--wide">
          EXPORT
        </ElementButton>
      </div>
    </aside>
  );
};

export default Navigation;
