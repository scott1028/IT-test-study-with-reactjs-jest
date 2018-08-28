// mock something in your APP
import axios from 'axios';
import * as utils from './utils';
import utils2 from './utils';
console.log('[utils]', utils);
console.log('[utils2]', utils2);

// >> module mock can't invoke mockRestore later
// >> this line make all member of axios to be a function which return undefined and do nothing.
jest.mock('axios');	 // put this outside testcase

beforeEach(() => {
  console.log('[beforeStarted]');
});

test('another test', () => {
	// jest.mock('axios');	// no work if put this inside/

	console.log(axios);
    expect(true).toBe(true);

    alert(10);
    alert(20);
    debugger;
});
