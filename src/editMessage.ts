export class editMessage {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    removeSpace(): string {
        if (typeof this.text !== "string")
            throw new TypeError("Provide a STRING!!");

        return this.text.replace(/\s/g, "");
    }

    toLowerCase(): string {
        if (typeof this.text !== "string")
            throw new TypeError("Provide a STRING!!");

        return this.text.toLowerCase();
    }

    toUpperCase(): string {
        if (typeof this.text !== "string")
            throw new TypeError("Provide a STRING!!");

        return this.text.toUpperCase();
    }

    toTitleCase(): string {
        if (typeof this.text !== "string")
            throw new TypeError("Provide a STRING!!");

        const sentence = this.text.toLowerCase().split(" ");
        for (let i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }

        return sentence.join(" ");
    }
}
