import { test, describe } from 'node:test';
import assert from 'node:assert';
import { sum } from '../tasks/sum.mjs';


describe('Check sum is working', () => {
  test('3 + 3 === 6', () => {
    const expectedSumResult = 6; 
    assert.strictEqual(sum(3, 3), expectedSumResult);
  });

  test('3 + 4 !== 6', () => {
    const expectedSumResult = 6; 
    assert.notEqual(sum(3, 4), expectedSumResult);
  });
});
 