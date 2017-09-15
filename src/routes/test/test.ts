import { observable } from "aurelia-framework";

export class Test {
    min: number;
    max: number;
    step: number;
    @observable value: number;

    dummyArr: number[];

    constructor() {
        this.min = 0;
        this.max = 99;
        this.step = 1;
        this.value = 49;

        this.dummyArr = [9,19,29,39,49,59,69,79,89,99]
    }

    valueChanged(n, o) {
        console.log(n, o);
    }
}
