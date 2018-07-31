// mock something in your APP
import * as utils from './utils';
import utils2 from './utils';
console.log('[utils]', utils);
console.log('[utils2]', utils2);

beforeEach(() => {
  console.log('[beforeStarted]');
});

test('another test', () => {
    expect(true).toBe(true);
});
