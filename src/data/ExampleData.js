export const ExamplePolls = [
  {
    _id: {
      $oid: 'ID1',
    },
    question: 'Is this the 1 question?',
    answers: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
    __v: 0,
  },
  {
    _id: {
      $oid: 'ID2',
    },
    question: 'Is this the 2 question?',
    answers: ['Answer21', 'Answer22', 'Answer23', 'Answer24'],
    __v: 0,
  },
  {
    _id: {
      $oid: 'ID3',
    },
    question: 'Is this the 3 question?',
    answers: ['Answer31', 'Answer32', 'Answer33', 'Answer34'],
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
