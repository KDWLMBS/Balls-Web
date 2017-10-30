export class Pattern {
    _id: string;
    name: string;
    lastModified: number;
    type: string;
    frames: Array<Frame>;
    shift: boolean; // enabled if ANIMATIONTYPE is shifting
    shiftDirection: SHIFTDIRECTION;
    shiftDuration: number;

    constructor() {
        this.name = `${Date.now()}`;
        this.lastModified = Date.now();
        this.frames = [];
    }
}

export class Frame {
    duration: number; // ignored for single
    positions: Array<number>;

    constructor()  {
        this.duration = 0;
        this.positions = [];
        for (let i = 0; i < 30; i++) {
            this.positions.push(0);
        }
    }
}

export class Formula {
    _id: string;
    name: string;
    lastModified: number;
    formula: string;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    shift: boolean;
    shiftDirection: SHIFTDIRECTION;
    shiftDuration: number;

    constructor(name: string) {
        this.name = name;
        this.lastModified = Date.now();
    }
}

export enum PATTERNTYPE {
    SINGLE,
    MULTIPLE
}

export enum ANIMATIONTYPE {
    STATIC,
    SHIFTING
}

export enum SHIFTDIRECTION {
    LEFT,
    RIGHT
}
