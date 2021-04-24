import { urlChecker } from '../client/js/urlChecker';

describe('testing the function validateURL()', () => {
    const  validUrlExample = "https://javascript.plainenglish.io/build-a-news-app-with-next-js-182e6287aee5";
    const  invalidUrlExample = ""
       test('Returns true on valid url', async () => {
           const response = urlChecker(validUrlExample);
           expect(response).toBe(true);
           expect(response).toBeDefined();
       })
       test('Returns false on invalid url', async () => {
            const response = urlChecker(invalidUrlExample);
            expect(response).toBe(false);
       })
    })

