import React, { useState } from 'react';
import ModuleSheetCreator from '../components/modules/SheetCreator';
import ModuleSectorCreator from '../components/modules/SectorCreator';
import ModuleSheet from '../components/modules/Sheet';

const PageIndex = () => {
  const [selectedOrganizationInfo, setSelectedOrganizationInfo] = useState(null);

  const updateSector = (selectedInfo) => {
    setSelectedOrganizationInfo(selectedInfo);
  };

  return (
    <>
      <ModuleSheetCreator />
      <ModuleSectorCreator updateSector={updateSector} />
      <ModuleSheet selectedOrganizationInfo={selectedOrganizationInfo} />
    </>
  );
};
export default PageIndex;