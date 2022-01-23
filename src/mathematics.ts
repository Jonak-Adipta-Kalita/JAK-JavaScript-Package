export class mathematics {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add(): number {
        if (typeof this.num1 !== "number" || typeof this.num2 !== "number") {
            throw new TypeError("Provide a INTEGER!!");
        }

        return this.num1 + this.num2;
    }

    sub(): number {
        if (typeof this.num1 !== "number" || typeof this.num2 !== "number") {
            throw new TypeError("Provide a INTEGER!!");
        }

        return this.num1 - this.num2;
    }

    mul(): number {
        if (typeof this.num1 !== "number" || typeof this.num2 !== "number") {
            throw new TypeError("Provide a INTEGER!!");
        }

        return this.num1 * this.num2;
    }

    div(): number {
        if (typeof this.num1 !== "number" || typeof this.num2 !== "number") {
            throw new TypeError("Provide a INTEGER!!");
        }

        return this.num1 / this.num2;
    }
}
