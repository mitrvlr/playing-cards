export const sheet = {
  row: 6,
  col: 10,
}

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
    }
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
    ]
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
    ]
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
    ]
  },
];