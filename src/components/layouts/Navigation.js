import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';
import SectorCreator from '../modules/SectorCreator';
import SearchOrganization from '../modules/SearchOrganization';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
      <SectorCreator />
      <SearchOrganization />
    </aside>
  );
};

export default Navigation;
