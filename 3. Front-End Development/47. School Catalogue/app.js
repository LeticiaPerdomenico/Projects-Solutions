/*1*/
class School {
    /*2*/
    constructor(name, level, numberOfStudents){
        /*3*/
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    /*4*/
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    /*5*/
    set numberOfStudents(value){
      if (value.isNaN()) {
        console.log('Invalid input: numbersOfStudents must be set to a Number');
      } else {
        this._numberOfStudents = value;
      }
    }
    /*6*/
     quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
      }
      /*7*/
      static pickSubstituteTeacher(substituteTeacher) {
        const randInt = Math.floor(substituteTeacher.length * Math.random());
       return substituteTeacher[randInt];
      }
  }
  /*8*/
  class PrimarySchool extends School {
    /*9*/
    constructor(name, numberOfStudents, pickupPolicy){
        /*10*/
      super(name, 'primary', numberOfStudents);
      /*11*/
      this._pickupPolicy = pickupPolicy;
    }
    /*12*/
    get pickupPolicy(){
      return console.log(this._pickupPolicy);
    }
  }
  /*13*/
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  /*14*/
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  /*15*/
  lorraineHansbury.quickFacts();
  /*16*/
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  /*17*/
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  /*18*/
  console.log(alSmith.sportsTeams);
  
  
  
  
  
  
  
  
  
  