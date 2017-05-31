import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { io } from '../src/Codingame';

describe('io', () => {
    beforeEach(() => {
        io.reset();
    });

    describe('readline()', () => {
        it('should return hello world when store contains hello world', () => {
            io.addInputLine('hello world');
            expect(io.readline()).to.equal('hello world');
        });
        it('should return messages in correct order when reading line multiple times', () => {
            io.addInputLine('hello world');
            io.addInputLine('hello another world');

            expect(io.readline()).to.equal('hello world');
            expect(io.readline()).to.equal('hello another world');
        });
        it('should throw an error when no line', () => {
            expect(() => io.readline()).to.throw(Error);
        });
    });

    describe('print()', () => {
        it('should store hello world in the memory when printing hello world', () => {
            io.print('hello world');
            expect(io.getNextPrintCommand()).to.equal('hello world');
        });
        it('should return print commands in correct order when printing multiple lines', () => {
            io.print('hello world');
            io.print('hello another world');

            expect(io.getNextPrintCommand()).to.equal('hello world');
            expect(io.getNextPrintCommand()).to.equal('hello another world');
        });
        it('should throw an error when no line were printed', () => {
            expect(() => io.getNextPrintCommand()).to.throw(Error);
        });
    });
});
