  
import { handleSubmit } from '../client/js/formHandler'


describe('Testing the existance of the handleSubmit() function' , () => {
    test('should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Testing if handleSubmit() is a function' , () => {
    test('should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});