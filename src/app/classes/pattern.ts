import { PatternService } from "../services/pattern.service";

export class Pattern {
    _id: string;
    name: string;
    lastModified: number;
    frames: Array<Frame>;

    constructor() {
        this.name = `${Date.now()}`;
        this.lastModified = Date.now();
        this.frames = new Array<Frame>();
        for(let i = 0; i < 5; i++) this.frames.push(new Frame());
    }
}

export class Frame {
    duration: number;
    positions: Array<number>;

    constructor()  {
        this.duration = 1;
        this.positions = [ -100, -50, -25, -10, 0, 10, 25, 50, 100 ];
    }
}
