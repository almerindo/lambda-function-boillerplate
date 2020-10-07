import app from '../app'

describe('Test lambda boillerplate', () => {
  it('should pass', async () => {
    const result = await app({},{});
    expect(result).toHaveProperty('statusCode');
    expect(result).toHaveProperty('body');
    expect(result.body).toBe('{\"message\":\"Almerindo Rehem\"}');
  });
});
