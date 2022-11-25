import { test, describe, beforeEach } from 'node:test';
import { deepStrictEqual, CallTracker, snapshot } from 'node:assert';
import Database from '../tasks/database.mjs';

const tracker = new CallTracker();

describe('Check that Database methods are working and called properly', async () => {
  let db = new Database();

  test('check that database add new data and return it upon request', async () => {
    const data = { id: 1, user: 'student' };
    await db.add(data);
    const expectedData = await db.read();

    deepStrictEqual([data], expectedData);
  });

  test('spy on database add method with CallTrack and check that method and args are called', async () => {
    const spy = tracker.calls(() => {});
    db = {
      add: spy,
    };

    const data = { id: 2, user: 'admin' };

    await db.add(data);

    const [
      {
        thisArg: { add },
        arguments: fnArgs,
      },
    ] = tracker.getCalls(spy);

    deepStrictEqual(add, db.add);
    deepStrictEqual(fnArgs, [data]);
    deepStrictEqual(tracker.getCalls(spy).length, 1);
    tracker.reset();
    deepStrictEqual(tracker.getCalls(spy).length, 0);
  });

  test('make snapshop of database testing data', async () => {
    db = new Database();
    await db.add({ id: 0, user: 'moderator' });

    console.log('DATABASE!!', db);
    const data = await db.read();
    await snapshot(data, 'dbData');
  });
});
