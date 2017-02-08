let Spaceship = require("./Spaceship");
let CrewMember = require("./CrewMember");
let Rocket = require("./Rocket");
let crewNames = ["Lindsey","Erik","Tyler"];

function launchpad() {
    console.log("TIME TO LAUNCH");
    let ourship = new Spaceship("RocketPod");
    console.log(ourship.name + " is about to launch");
    ourship.loadCrew(trainCrew(crewNames));
    console.log(ourship.captain() + ' is our captains!');
    let rocket = new Rocket("Rocket-Man");
    ourship.mountPropulsion(rocket);
    ourship.takeoff();
    ourship.propulsion.addFuel(3);
    ourship.takeoff();
}
let trainedCrew = [];
function trainCrew(crewNames) {
  for(i = 0;i < crewNames.length; i++){
    crewNames[i].trained = true;
    trainedCrew.push( {name: crewNames[i]});
  }
return trainedCrew;
}

launchpad();
