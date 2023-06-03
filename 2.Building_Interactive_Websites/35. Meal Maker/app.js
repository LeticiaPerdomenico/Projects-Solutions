/*1*/
const menu = {
    /*2*/
    _meal: '',
    /*3*/
    _price: 0,

    /*5*/
    set meal(mealToCheck) {
        /*6*/
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheckl
        }
    },
    /*7*/
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheckl
        }
    },

    /*9*/
    get todaysSpecial() {
        /*10*/
       if (this._meal && this._price) {
        return `Today's Meal is ${this._meal} for $${this._price}!`
       } else {
        return `Meal or price not set correctly!`
       }
    }
    
};
/*4/ 8*/
/*
menu._meal = 8;
menu._price = 'Pizza';
console.log(menu);
*/

/*8*/
menu._meal = 'Pizza';
menu._price = 8;

/*11*/
console.log(menu.todaysSpecial);
