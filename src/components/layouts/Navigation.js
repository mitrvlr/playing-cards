import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';
import SectorSelector from '../modules/SectorSelector';
import MemberSelector from '../modules/MemberSelector';
import SectorCreator from '../modules/SectorCreator';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
      <SectorSelector />
      <MemberSelector />
      <SectorCreator />
    </aside>
  );
};

export default Navigation;
