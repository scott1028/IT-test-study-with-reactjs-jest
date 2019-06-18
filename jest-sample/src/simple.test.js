// mock something in your APP
import axios from 'axios';
import * as utils from './utils';
import utils2 from './utils';
import businessLogicObject, * as testedModule from './lib';
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

	// console.log(axios);
    expect(true).toBe(true);

    alert(10);
    alert(20);
    debugger;
});

// test using sub function
// jest.mock('./lib');
test('mock library', async () => {
  console.log('[businessLogicObject][Original]', businessLogicObject);

  // Weird behavior abount jest.spyOn when using `import * as from`
  // Ref: https://github.com/facebook/jest/issues/5268
  const spy = jest.spyOn(testedModule, 'fetchApi');  // also a copy of original function logic

  expect(testedModule.fetchApi).toBeDefined();
  expect(testedModule.default).toBeDefined();

  console.log('[testedModule.default]', testedModule.default);
  console.log('[businessLogicObject]', businessLogicObject);

  // Assume them should be same
  expect(testedModule.default === businessLogicObject).toBe(true);

  const json = await businessLogicObject();

  // Because reference in testedModule the fetchApi still refer to original function rather than onSpy function.
  expect(spy).not.toHaveBeenCalled();

  await testedModule.fetchApi();

  // It should be called hey, hey!!
  expect(spy).toHaveBeenCalled();
});
