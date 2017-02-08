class Rocket{
  constructor(name){
    this.name = name;
    this.fuel = 0;
  }
 addFuel(n){
  this.fuel = this.fuel + n;
  console.log(this.fuel + 'is the new amount of fuel!');
 }

  fire(){
    if (this.fuel > 0){
      this.fuel = this.fuel - 1;
      console.log("Engines have fired the new fuel count is " + this.fuel + " gallons");
      return true;
    } else {
      console.log("Engines have failed");
      return false;
    }
  }
}

module.exports = Rocket;
