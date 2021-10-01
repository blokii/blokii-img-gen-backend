const app = require('../../../src/app');

describe('\'unsplash/track\' service', () => {
  it('registered the service', () => {
    const service = app.service('unsplash/track');
    expect(service).toBeTruthy();
  });
});
