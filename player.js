class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scoreList = [];
    }

    addScore(score) {
        let inputScore = Number(score);
        if (inputScore === parseInt(score)) {
            this.scoreList.push(inputScore);
        }
        return this;
    }

    get scoreCount() {
        return this.scoreList.length;
    }

    get highestScore() {
        let result = undefined;
        if (this.scoreList.length > 0) {
            this.scoreList.sort((a, b) => b - a);
            let score = this.scoreList.slice(0, 1);
            result = score[0];
        }
        return result;
    }

    get topFiveScore() {
        this.scoreList.sort((a, b) => b - a);
        return this.scoreList.slice(0, 5);
    }

    toString() {
        this.scoreList.sort((a, b) => b - a);
        if (this.scoreList.length > 0) {
            return `${this.nickName}: [${this.scoreList.join(',')}]`;
        } else {
            return `${this.nickName}: []`;
        }
    }
}



























