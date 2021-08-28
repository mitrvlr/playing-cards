import React from 'react';
import Logo from '../elements/Logo';
import SheetCreator from '../modules/SheetCreator';

const Navigation = () => {
  return (
    <aside className="navigation">
      <Logo />

      <SheetCreator />
    </aside>
  );
};

export default Navigation;
