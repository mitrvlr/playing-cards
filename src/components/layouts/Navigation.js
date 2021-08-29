import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';
import SectorCreator from '../modules/SectorCreator';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
      <SectorCreator />
    </aside>
  );
};

export default Navigation;
