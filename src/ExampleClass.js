import ParentClass from './ParentClass';

export default class ExampleClass extends ParentClass {
    constructor(msg) {
        super(`Hello ${msg}`);
    }
}