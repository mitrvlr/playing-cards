import { OrganizationIds, OrganizationLabels, OrganizationColors } from '../policy';

export const responseOrganizations = [
  {
    id: OrganizationIds.DEVELOPMENT,
    title: OrganizationLabels.DEVELOPMENT,
    color: OrganizationColors.DEVELOPMENT,
    member: [
      {
        memberId: 0,
        name: '장동수',
      },
      {
        memberId: 1,
        name: '주영택',
      },
      {
        memberId: 2,
        name: '전성하',
      },
      {
        memberId: 3,
        name: '최은지',
      },
      {
        memberId: 4,
        name: '권승곤',
      },
      {
        memberId: 5,
        name: '모영진',
      },
      {
        memberId: 6,
        name: '김태희',
      },
    ],
  },
  {
    id: OrganizationIds.COLOSO,
    title: OrganizationLabels.COLOSO,
    color: OrganizationColors.COLOSO,
    member: [
      {
        memberId: 0,
        name: '김동혁',
      },
      {
        memberId: 1,
        name: '김하연',
      },
      {
        memberId: 2,
        name: '최아영',
      },
      {
        memberId: 3,
        name: '강주영',
      },
      {
        memberId: 4,
        name: '김지혜',
      },
    ],
  },
  {
    id: OrganizationIds.FASTCAMPUS,
    title: OrganizationLabels.FASTCAMPUS,
    color: OrganizationColors.FASTCAMPUS,
    member: [
      {
        memberId: 0,
        name: '신해동',
      },
      {
        memberId: 1,
        name: '김종무',
      },
    ]
  },
  {
    id: OrganizationIds.SNOWBALL,
    title: OrganizationLabels.SNOWBALL,
    color: OrganizationColors.SNOWBALL,
    member: [
      {
        memberId: 0,
        name: '김지훈',
      },
      {
        memberId: 1,
        name: '올라프',
      },
      {
        memberId: 2,
        name: '엘사',
      },
    ]
  },
  {
    id: OrganizationIds.LEMONADE,
    title: OrganizationLabels.LEMONADE,
    color: OrganizationColors.LEMONADE,
    member: [
      {
        memberId: 0,
        name: '서유라',
      },
    ]
  },
];

export const responseSheetVersion1 = [
  {
    id: OrganizationIds.DEVELOPMENT,
    title: OrganizationLabels.DEVELOPMENT,
    color: OrganizationColors.DEVELOPMENT,
    sheet: [
      {
        seatId: 0,
        member: '최은지',
        locate: [0, 0],
      },
      {
        seatId: 1,
        member: '전성하',
        locate: [0, 1],
      },
      {
        seatId: 2,
        member: null,
        locate: [0, 2],
      },
      {
        seatId: 3,
        member: null,
        locate: [0, 3],
      },
      {
        seatId: 4,
        member: null,
        locate: [1, 0],
      },
      {
        seatId: 5,
        member: null,
        locate: [1, 1],
      },
      {
        seatId: 6,
        member: null,
        locate: [1, 2],
      },
      {
        seatId: 7,
        member: null,
        locate: [1, 3],
      },
    ]
  },
  {
    id: OrganizationIds.COLOSO,
    title: OrganizationLabels.COLOSO,
    color: OrganizationColors.COLOSO,
    sheet: [
      {
        seatId: 0,
        member: '김하연',
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
      {
        seatId: 3,
        member: null,
        locate: [3, 3],
      },
      {
        seatId: 4,
        member: null,
        locate: [4, 0],
      },
      {
        seatId: 5,
        member: null,
        locate: [4, 1],
      },
      {
        seatId: 6,
        member: null,
        locate: [4, 2],
      },
      {
        seatId: 7,
        member: null,
        locate: [4, 3],
      },
    ]
  },
  {
    id: OrganizationIds.FASTCAMPUS,
    title: OrganizationLabels.FASTCAMPUS,
    color: OrganizationColors.FASTCAMPUS,
    sheet: [
      {
        seatId: 0,
        member: null,
        locate: [0, 4],
      },
      {
        seatId: 1,
        member: '김종무',
        locate: [0, 5],
      },
      {
        seatId: 2,
        member: null,
        locate: [0, 6],
      },
      {
        seatId: 3,
        member: null,
        locate: [1, 4],
      },
      {
        seatId: 4,
        member: null,
        locate: [1, 5],
      },
      {
        seatId: 5,
        member: null,
        locate: [1, 6],
      },
    ],
  },
  {
    id: OrganizationIds.SNOWBALL,
    title: OrganizationLabels.SNOWBALL,
    color: OrganizationColors.SNOWBALL,
    sheet: [
    {
      seatId: 0,
      member: '올라프',
      locate: [3, 4],
    },
    {
      seatId: 1,
      member: null,
      locate: [3, 5],
    },
    {
      seatId: 2,
      member: '엘사',
      locate: [3, 6],
    },
    {
      seatId: 3,
      member: '',
      locate: [3, 7],
    },
  ],
},
];