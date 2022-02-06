const getHeadlines = require('./index');
const fs = require('fs');
require('jest-fetch-mock').enableMocks();

/**
 * @jest-environment jsdom
 */
 
 describe('Get headlines', () => {
    it('fetches data correctly', async () => {
        const response = await getHeadlines()
        expect(response).not.toBe(null);
    });

   it('displays the text headlines', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     getHeadlines();
     // 1. The text should be on the page
     expect(document.querySelectorAll('.title').length).toEqual(10);
     expect(document.querySelectorAll('.title')[0].innerText).toEqual('Tottenham Hotspur v Brighton: FA Cup fourth round – live!');
   });
 
   it('displays the headline images', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     getHeadlines();
     expect(document.querySelectorAll('.images').length).toEqual(10);
   });
 });