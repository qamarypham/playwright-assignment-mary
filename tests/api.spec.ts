import { test, expect } from '../fixtures/fixture'
import { login } from '../pages/api/authApi';


test.describe('API Login functionality', {
    tag: ['@api']
}, () => {
    test('Verify invalid login', async ({ request }) => {
        const response = await login(
            request,
            'invalid@test.com',
            'wrong_password',
            'dummy_state'
        );
        console.log('Response status:', response.status());
        console.log('Headers:', response.headers());
        expect(response.status()).toBeGreaterThanOrEqual(400);
    });
});