function getTickets(descriptions, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    function compare(a, b) {
        if(sortCriteria === 'destination') {
            if(a.destination < b.destination) { return -1 }
            if(a.destination > b.destination) { return 1 }
            return 0;
        }else if(sortCriteria === 'price') {
            if(a.price < b.price) { return -1 }
            if(a.price > b.price) { return 1 }
            return 0;
        }else if(sortCriteria === 'status') {
            if(a.status < b.status) { return -1 }
            if(a.status > b.status) { return 1 }
            return 0;
        }
    }
    let resultArr = [];
    for(let description of descriptions) {
        let splittedStr = description.split('|');
        resultArr.push(new Ticket(splittedStr[0], Number(splittedStr[1]), splittedStr[2]));
    }

    resultArr.sort(compare);

    return resultArr;
}

console.log(getTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));