export const ExamplePolls = [
  {
    _id: {
      $oid: 'ID1',
    },
    question: 'Is this the 1 question?',
    answers: [
			{ answer: 'Answer1', votes: 10 },
			{ answer: 'Answer2', votes: 12 },
			{ answer: 'Answer3', votes: 30 },
    ],
    __v: 0,
  },
  {
    _id: {
      $oid: 'ID2',
    },
    question: 'Is this the 2 question?',
    answers: [
			{ answer: 'Answer21', votes: 10 },
			{ answer: 'Answer22', votes: 12 },
			{ answer: 'Answer23', votes: 30 },
    ],
    __v: 0,
  },
  {
    _id: {
      $oid: 'ID3',
    },
    question: 'Is this the 3 question?',
    answers: [
			{ answer: 'Answer31', votes: 10 },
			{ answer: 'Answer32', votes: 12 },
			{ answer: 'Answer33', votes: 30 },
    ],
    __v: 0,
  },
];

export const ExampleUsers = [
  {
    _id: {
      $oid: '123',
    },
    local: {
      password: 'password',
      email: 'qw',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '123',
    },
    local: {
      password: 'password',
      email: 'as',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '123',
    },
    twitter: {
      displayName: 'Daniel Deutsch',
      username: 'DDCreationStudi',
      token: 'token1',
      id: '12345',
    },
  },
];
