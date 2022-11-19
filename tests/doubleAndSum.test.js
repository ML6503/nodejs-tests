import { test } from 'node:test';
import assert from 'node:assert';
import { doubleAndSum } from '../tasks/doubleAndSum.mjs';

test("Check if it doubles each element or the array and returns the sum of the doubled numbers", async (t) => {
  await t.test("Array of Length 3", (t) => {
    assert.strictEqual(doubleAndSum([1, 2, 3]), 12);
  });

  await t.test("Array of Length 10", (t) => {
    assert.strictEqual(doubleAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 90);
  });

  await t.test("Array of random large numbers", (t) => {
    assert.strictEqual(
      doubleAndSum([
        11, 24, 43, 4, 85, 6, 117, 8, 9, 510, 22, 4, 7, 9, 33, 45, 77,
      ]),
      2028
    );
  });
});

// test courtesy of https://sweetcode.io/the-nodejs-test-runner-module/