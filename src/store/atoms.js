import { atom } from 'recoil';
import { responseOrganizations, responseSheetVersion1 } from '../mock';

export const sheetMap = atom({
  key: 'sheetMap',
  default: [10, 7],
});

export const sheetMapMode = atom({
  key: 'sheetMapMode',
  default: null,
})

export const currentSectorInfo = atom({
  key: 'currentSectorInfo',
  default: null,
});

// todo: currentSectorInfo 의 sheet 배열이 초기값이 되도록 수정
export const selectedSeatMap = atom({
  key: 'selectedSeatMap',
  default: [],
});

export const organizationList = atom({
  key: 'responseOrganizations',
  default: responseOrganizations,
});

export const sheetVersion1 = atom({
  key: 'responseSheetVersion1',
  default: responseSheetVersion1,
});