const player = {
    name: 'Sachin',
    surname: 'Tendulkar',
    battingOrder: 1,
    canBowl: false,
    getDetails: function () {
        console.log(this.name, this.surname, "comes at", this.battingOrder);
    }
}

const obj = function () {
    console.log(this.getDetails());
}

let x = obj.bind(player);
x();
 