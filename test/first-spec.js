import { describe, it } from 'mocha';
import { expect } from 'chai';
import ExampleClass from '../src/ExampleClass';

describe('ExampleClass', () => {
    describe('test exemple', () => {
        const sut = new ExampleClass('world');
        it('should return hello world', () => {
            expect(sut.msg).to.equal('Hello world');
        });
    });
});