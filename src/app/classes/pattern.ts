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
        this.positions = [];
        for (let i = 0; i < 30; i++) {
            this.positions.push(0);
        }
    }
}

export interface Formula {
    formula: string;
    x: { min: number, max: number };
    y: { min: number, max: number };
}

export enum PATTERNTYPE {
    single,
    multiple,
    formula
}

export enum ANIMATIONTYPE {
    static,
    dynamic,
    floating
}

