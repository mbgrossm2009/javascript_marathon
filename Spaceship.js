 class Spaceship{
  constructor(name){
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }
 loadCrew(trainedCrew){
    for(let i=0;i<trainedCrew.length;i++){
      this.crew.push(trainedCrew[i]);
      console.log(trainedCrew[i].name + " has boarded the ship!");
    }
  }

  captain(){

    let randomNumber = Math.floor(Math.random() * this.crew.length)
    let captainsName = this.crew[randomNumber].name;
    return captainsName;
  }

  mountPropulsion(obj){
    this.propulsion = obj;
    console.log(this.propulsion.name + " has been mounted");
  }

  takeoff(){

    if (this.propulsion.fire()){
      console.log("ROOOOOSHHHHHHHHHHHH");
    } else {
      console.log("takeoff was unsuccessful");
    }


  }
}

module.exports = Spaceship;
