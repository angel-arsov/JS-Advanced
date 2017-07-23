class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }
    getRats() {
        return this.unitedRats;
    }
    toString() {
        if(this.unitedRats.length > 0) {
            return `${this.name} \n##${this.unitedRats.join('\n##')}`;
        }else {
            return `${this.name}`;
        }
    }
}

let rat = new Rat('Gosheto');
console.log(rat.toString());

console.log(rat.getRats());
rat.unite(new Rat('Samuilkata'));
rat.unite(new Rat('Peshaka'));
console.log(rat.getRats());

console.log(rat.toString());