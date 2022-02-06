const getNews = require('./index');
const fs = require('fs');
require('jest-fetch-mock').enableMocks();

/**
 * @jest-environment jsdom
 */
