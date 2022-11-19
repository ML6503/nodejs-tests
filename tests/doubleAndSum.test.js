import { test } from 'node:test';
import assert from 'node:assert';
import { doubleAndSum } from '../tasks/doubleAndSum.mjs';

test("Check if doubleAndSum function doubles each element or the array and returns the sum of the doubled numbers", async (t) => {
  let result;
  await t.test("Array of 1, 2, 3 ", (t) => {
    result = 12;
    assert.strictEqual(doubleAndSum([1, 2, 3]), result);
  });

  await t.test("Array of Length 10", (t) => {
    result = 90;
    assert.strictEqual(doubleAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), result);
  });

  await t.test("Array of random large numbers", (t) => {
    result = 2028;
    assert.strictEqual(
      doubleAndSum([
        11, 24, 43, 4, 85, 6, 117, 8, 9, 510, 22, 4, 7, 9, 33, 45, 77,
      ]),
      result
    );
  });
});
