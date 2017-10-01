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
    }
}

export class Frame {
    duration: number;
    positions: Array<number>;

    constructor()  {
        this.duration = 0;
        this.positions = new Array<number>();
    }
}
