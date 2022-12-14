/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar2/blob/main/ycalendar2/LICENSE
*/


/**
* The class to put other color as the checked dates, like a schedule.
*/
export class CheckedDate{
    /**
    * The target date.
    */
    private _date: Date;

    /**
    * The constructor.
    * @param {*} year The year.
    * @param {*} month The month.
    * @param {*} day The date.
    */
    constructor( year:number, month:number, day:number ){
        this._date = new Date( year, month, day, 1, 1, 1, 1 );
    }

    /**
    * Check whether date is same or not.
    * @param {*} d The object of the class Date.
    * @returns Returns true if d is same, otherwise returns false.
    */
    equals( d:CheckedDate ){
        if( this._date.getFullYear() == d._date.getFullYear()
        && this._date.getMonth() == d._date.getMonth()
        && this._date.getDate() == d._date.getDate() ) return true;
    return false;
    }

    /**
    *  Make a string to print.
    * @returns The string for the date.
    */
    toString(){
        return this._date.toDateString();
    }
};




/**
* The class to manage the CheckedDate.
*/
export class CheckedDateList{
    /**
    * The array of the class CheckedDateEx.
    */
    private _checkedDates:any;

    /**
    * The constructor.
    */
    constructor(){
        this._checkedDates = new Array();
    }

    /**
    * Add an object of the class CheckedDate.
    * @param {*} d An object of the class CheckedDate.
    */
    add( d:CheckedDate ){
        this._checkedDates.push( d );
    }

    /**
    * Clear the array this object manages.
    */
    clear(){
        this._checkedDates.splice( 0 );
    }

    /**
    * Get the object of the class CheckedDate.
    * @param {*} target the object of the class CheckedDate, which you want to search.
    * @returns Returns the object of the CheckedDate if this object has, otherwise returns null.
    */
    at( target:CheckedDate ){
        for( let i = 0; i < this._checkedDates.length; i++ ){
            if( this._checkedDates[i].equals( target ) == true ){
                return this._checkedDates[i];
            }
        }
    return null;
    }

    /**
    * Check whether this object has the target date or not.
    * @param {*} target the object of the class CheckedDate, which you want to search.
    * @returns Returns true if this object has the target, otherwise return false.
    */
    has( target:CheckedDate ){
        return(this.at( target ) == null ? false : true);
    }

    /**
    * Print to debug.
    */
    print(){
        var txt = "";
        for( let i = 0; i < this._checkedDates.length; i++ ){
            txt += this._checkedDates[i].toString() + "\n";
        }
        alert( txt );
    }
};
