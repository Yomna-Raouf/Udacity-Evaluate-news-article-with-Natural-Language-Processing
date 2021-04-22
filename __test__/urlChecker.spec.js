import { urlChecker } from '../src/client/js/urlChecker';

describe('testing the function validateURL()', () => {
    let url = "https://www.valentinog.com/blog/jest/";
    let falseInput = ""
       test('Returns true on valid url', async () => {
           const response = urlChecker(url);
           expect(response).toBe(true);
           expect(response).toBeDefined();
       })
       test('Returns false on invalid url', async () => {
            const response2 = urlChecker(falseInput);
            expect(response2).toBe(false);
       })
    })

