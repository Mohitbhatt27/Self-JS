const player = {
  name: 'Sachin',
  surname: 'Tendulkar',
  battingOrder: 1,
  canBowl: false,
  getDetails: function () {
    console.log(this.name, this.surname, 'comes at', this.battingOrder);
    
  },
};

const obj = function (x,y) {
  this.getDetails();
  console.log(x + y); // 7
};

obj.call(player, 2, 5);
