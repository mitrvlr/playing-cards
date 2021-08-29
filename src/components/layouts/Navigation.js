import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';
import SectorSelector from '../modules/SectorSelector';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
      <SectorSelector />
    </aside>
  );
};

export default Navigation;
