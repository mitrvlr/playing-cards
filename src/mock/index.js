export const sheet = {
  row: 6,
  col: 10,
};

export const responseOrganizations = [
  {
    id: 0,
    title: '개발실',
    color: 'rgb(255, 240, 139)',
    member: [
      {
        memberId: 0,
        name: 'choi',
      },
      {
        memberId: 1,
        name: 'jeon',
      },
      {
        memberId: 2,
        name: 'joo',
      },
    ],
  },
  {
    id: 1,
    title: '기획팀',
    color: 'rgb(156, 235, 206)',
    member: [
      {
        memberId: 0,
        name: 'kim',
      },
      {
        memberId: 1,
        name: 'choi',
      },
    ],
  },
  {
    id: 2,
    title: '디자인팀',
    color: 'rgb(230, 206, 255)',
    member: {
      memberId: 0,
      name: 'kang',
    },
  },
];

export const responseSheetVersion1 = [
  {
    id: 0,
    title: '개발실',
    color: 'rgb(255, 240, 139)',
    sheet: [
      {
        memberId: 0,
        member: 'jeon',
        locate: [0, 0],
      },
      {
        memberId: 1,
        member: 'choi',
        locate: [0, 1],
      },
      {
        memberId: 2,
        member: 'joo',
        locate: [0, 2],
      },
      {
        memberId: 3,
        member: null, // 개발실에 예약된 좌석
        locate: [1, 0],
      },
    ],
  },
  {
    id: 1,
    title: '기획팀',
    color: 'rgb(156, 235, 206)',
    sheet: [
      {
        memberId: 0,
        member: 'kim',
        locate: [3, 0],
      },
      {
        memberId: 1,
        member: null,
        locate: [3, 1],
      },
      {
        memberId: 2,
        member: null,
        locate: [3, 2],
      },
    ],
  },
  {
    id: 2,
    title: '디자인팀',
    color: 'rgb(230, 206, 255)',
    sheet: [
      {
        memberId: 0,
        member: 'kang',
        locate: [0, 4],
      },
      {
        memberId: 1,
        member: null,
        locate: [3, 3],
      },
      {
        memberId: 1,
        member: null,
        locate: [3, 4],
      },
    ],
  },
];

export const sectors = [
  {
    id: 1,
    title: 'group 1',
    theme: 'hsla(0, 100%, 84%, 1)',
    members: [0, 1, 2],
  },
  {
    id: 2,
    title: 'group 2',
    theme: 'hsla(33, 100%, 82%, 1)',
    members: [],
  },
  {
    id: 3,
    title: 'group 3',
    theme: 'hsla(52, 100%, 77%, 1)',
    members: [],
  },
  {
    id: 4,
    title: 'group 4',
    theme: 'hsla(110, 100%, 87%, 1)',
    members: [],
  },
  {
    id: 5,
    title: 'group 5',
    theme: 'hsla(157, 90%, 84%, 1)',
    members: [],
  },
  {
    id: 6,
    title: 'group 6',
    theme: 'hsla(185, 100%, 80%, 1)',
    members: [],
  },
  {
    id: 7,
    title: 'group 7',
    theme: 'hsla(217, 100%, 81%, 1)',
    members: [],
  },
  {
    id: 8,
    title: 'group 8',
    theme: 'hsla(249, 100%, 85%, 1)',
    members: [],
  },
  {
    id: 9,
    title: 'group 9',
    theme: 'hsla(300, 100%, 89%, 1)',
    members: [],
  },
];

export const members = [
  {
    id: 0,
    title: '아이유',
    sectorId: 1,
    locate: [0, 0],
  },
  {
    id: 1,
    title: '이지은',
    sectorId: null,
    locate: [],
  },
  {
    id: 2,
    title: '이지금',
    sectorId: null,
    locate: [],
  },
];
