import React, { useState } from 'react';
import ModuleSheetCreator from '../modules/SheetCreator';
import ModuleSectorCreator from '../modules/SectorCreator';
import ModuleSheet from '../modules/Sheet';

const Mat = () => {
  const [selectedOrganizationInfo, setSelectedOrganizationInfo] = useState(null);

  const updateSector = (selectedInfo) => {
    setSelectedOrganizationInfo(selectedInfo);
  };

  return (
    <section>
      <ModuleSheetCreator />
      <ModuleSectorCreator updateSector={updateSector} />
      <ModuleSheet selectedOrganizationInfo={selectedOrganizationInfo} />
    </section>
  );
};

export default Mat;
