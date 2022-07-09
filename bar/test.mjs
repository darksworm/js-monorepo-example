import assert from 'assert';
import bar from './bar.mjs';

describe('bar module', () => {
    it('spits bars for many days', () => {
        assert.strictEqual("extreme bars for many days", bar())
    })
})