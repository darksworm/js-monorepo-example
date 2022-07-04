import assert from 'assert';
import bar from './bar.mjs';

describe('bar module', () => {
    it('spits bars for days', () => {
        assert.strictEqual("bars for days", bar())
    })
})