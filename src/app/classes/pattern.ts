import { PatternService } from "../services/pattern.service";

export class Pattern {
    _id: string;
    name: string;
    date: number;
    frames: Array<Frame>;

    constructor() {
        this.name = "test";
        this.date = Date.now();
        this.frames = [ new Frame() ];
    }
}

export class Frame {
    duration: number;
    positions: Array<number>;

    constructor()  {
        this.duration = 1;
        this.positions = [ -100, -50, 0, 50, 100 ];
    }
}
