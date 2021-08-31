import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';
import SectorSelector from '../modules/SectorSelector';
import MemberSelector from '../modules/MemberSelector';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
      <SectorSelector />
      <MemberSelector />
    </aside>
  );
};

export default Navigation;
