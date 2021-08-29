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
        seatId: 0,
        member: '전성하',
        locate: [0, 0],
      },
      {
        seatId: 1,
        member: '최은지',
        locate: [0, 1],
      },
      {
        seatId: 2,
        member: null, // 개발실에 예약된 좌석
        locate: [0, 2],
      },
      {
        seatId: 3,
        member: null,
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
        seatId: 0,
        member: 'kim',
        locate: [3, 0],
      },
      {
        seatId: 1,
        member: null,
        locate: [3, 1],
      },
      {
        seatId: 2,
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
        seatId: 0,
        member: 'kang',
        locate: [0, 4],
      },
      {
        seatId: 1,
        member: null,
        locate: [3, 3],
      },
      {
        seatId: 1,
        member: null,
        locate: [3, 4],
      },
    ]
  },
];