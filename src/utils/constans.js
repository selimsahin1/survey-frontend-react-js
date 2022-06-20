const ENVIRONMENT_URLS = {
    DEV: 'http://localhost:2525/api/v1',
    LOCAL: 'http://192.168.1.50:2525/api/v1',
    LOCAL2: 'http://172.20.10.3:2525/api/v1',
    TEST: '',
    PROD: ''
}

//const API_URL = process.env.NODE_ENV === 'production' ? ENVIRONMENT_URLS.PROD : ENVIRONMENT_URLS.LOCAL


const ROUTES = {
    INDEX: '/',
    DEFAULT: '/',
    QUESTION_PAGE: '/questionPages',

}
const API_URLS = {
    BASE_URL: 'http://localhost:8080/',

}

export {
    ROUTES,
    API_URLS

}