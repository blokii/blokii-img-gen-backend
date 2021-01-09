const app = require('../../src/app');

describe('\'unsplash\' service', () => {
  it('registered the service', () => {
    const service = app.service('unsplash');
    expect(service).toBeTruthy();
  });
});
