import assert from 'assert';
import foo from './foo.mjs';

describe('foo module', () => {
    it('spits foos for days', () => {
        assert.strictEqual("very big foos for days", foo())
    })
})