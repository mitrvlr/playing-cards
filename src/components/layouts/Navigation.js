import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';
import SectorSelector from '../modules/SectorSelector';
import SectorCreator from '../modules/SectorCreator';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
      <SectorSelector />
      <SectorCreator />
    </aside>
  );
};

export default Navigation;
