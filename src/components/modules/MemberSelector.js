import React, { useState } from 'react';

import ElementSearchbar from '../elements/Searchbar';

const SectorCreator = () => {
  const onHandleChange = () => {
    console.log('[onChange]');
  };

  const onHandleSubmit = () => {
    console.log('[onHandleSubmit]');
  };

  return (
    <div className="editor">
      <ElementSearchbar placeholder="홍길동" />
    </div>
  );
};
export default SectorCreator;
