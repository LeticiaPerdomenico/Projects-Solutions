/*1*/
class Media {
    /*2*/
  constructor(title) {
    /*3*/
    this._title = title;
    this._isCheckedOut= false;
    this._ratings= [];
  }
  /*4*/
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  /*5*/
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  /*6*/
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut;
  }
  /*7*/
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating);
    return ratingsSum / this.ratings.length;
  }
  /*8*/
  addRating(value){
      this._ratings.push(value);
  }
}
/*9*/
class Book extends Media {
    /*10*/
  constructor(author, title, pages){
    /*11*/
    super(title);
    /*12*/
    this._author= author;
    this._pages= pages;
  }
  /*13*/
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
/*14*/
class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director= director;
    this._runTime= runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
/*15*/
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
/*16*/
historyOfEverything.toggleCheckOutStatus();
/*17*/
console.log(historyOfEverything.isCheckedOut);
/*18*/
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
/*19*/
console.log(historyOfEverything.getAverageRating());
/*20*/
const speed = new Movie('Jan de Bont', 'Speed', 116);
/*21*/
speed.toggleCheckOutStatus();
/*22*/
console.log(speed.isCheckedOut);
/*23*/
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
/*24*/
console.log(speed.getAverageRating());



