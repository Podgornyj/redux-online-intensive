// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const users = [
    {
        id:        '5c595bc5cf749ff16649a03e',
        firstName: 'Vasilii',
        lastName:  'Shubin',
        avatar:    'https://lab.lectrum.io/redux/api/image/algroktvgc9z/RwzytC7tf7.jpg',
    },
    {
        id:        '5c596000cf749f712d49a03f',
        firstName: 'Vasiliia',
        lastName:  'Shubina',
        avatar:    'https://lab.lectrum.io/redux/api/image/algroktvgc9z/placeholder.jpg',
    },
    {
        id:        '5c59607fcf749fcc2349a040',
        firstName: 'Vasiliiasd',
        lastName:  'Shubinasd',
        avatar:    'https://lab.lectrum.io/redux/api/image/algroktvgc9z/placeholder.jpg',
    },
    {
        id:        '5c596119cf749f767749a041',
        firstName: 'Vasiliia',
        lastName:  'Shubins',
        avatar:    'https://lab.lectrum.io/redux/api/image/algroktvgc9z/placeholder.jpg',
    }
];

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

global.__ = {
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    users,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
