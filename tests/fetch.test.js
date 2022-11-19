import { test, describe } from 'node:test';
import assert from 'node:assert';
import { getNodejsDocsSource } from '../tasks/fetch.mjs';


describe('Check fetch api node.js docs source function is working', () => {

  test('getNodejsDocsSource function returns  is called once', async () => {
    const tracker = new assert.CallTracker();
    const fetchFunc = tracker.calls(getNodejsDocsSource, 1);
    const nodeApiDocReceivedSource = await fetchFunc();
   
    const nodeApiDocExpectedSource = 'doc/api/documentation.md';

    assert.equal(nodeApiDocReceivedSource,  nodeApiDocExpectedSource);

    process.on('exit', () => {
      tracker.verify();
    });
  });
});

