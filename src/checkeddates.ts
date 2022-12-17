/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar2/blob/main/ycalendar2/LICENSE
*/


export class DateEx{
    private _date:Date;
    constructor( year:number, month:number, date:number ){
        this._date = new Date( year, month - 1, date, 1, 1, 1, 1 );
    }

    getFullYear():number{
        return this._date.getFullYear();
    }

    getMonth():number{
        return this._date.getMonth() + 1;
    }

    getDate():number{
        return this._date.getDate();
    }

    getDay():number{
        return this._date.getDay();
    }

    toDateString(): string{
        return this._date.toDateString();
    }

    /**
    * Check whether date is same or not.
    * @param  d The object of the class Date.
    * @returns Returns true if d is same, otherwise returns false.
    */
    equals( d:DateEx ): boolean{
        if( this._date.getFullYear() == d._date.getFullYear()
        && this._date.getMonth() == d._date.getMonth()
        && this._date.getDate() == d._date.getDate() ) return true;
    return false;
    }

    createLastDateEx(): DateEx{
        let tmp = new Date( this._date.getFullYear(), this._date.getMonth() + 1, 0 );
    return new DateEx( tmp.getFullYear(), tmp.getMonth() + 1, tmp.getDate() );
    }
}

/**
* The class to put other color as the checked dates, like a schedule.
*/
export class CheckedDate extends DateEx{
    /**
    * The constructor.
    * @param year The year.
    * @param month The month.
    * @param date The date.
    */
    constructor( year:number, month:number, date:number ){
        super( year, month, date );
    }

    /**
    * Check whether date is same or not.
    * @param  d The object of the class CheckedDate.
    * @returns Returns true if d is same, otherwise returns false.
    */
    equals( d:CheckedDate ): boolean{
        return super.equals( d );
    }

    /**
    *  Make a string to print.
    * @returns The string for the date.
    */
    toString(): string{
        return super.toDateString();
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
    * @param d An object of the class CheckedDate.
    */
    add( d:CheckedDate ): void{
        this._checkedDates.push( d );
    }

    /**
    * Clear the array this object manages.
    */
    clear(): void{
        this._checkedDates.splice( 0 );
    }

    /**
    * Get the object of the class CheckedDate.
    * @param target the object of the class CheckedDate, which you want to search.
    * @returns Returns the object of the CheckedDate if this object has, otherwise returns null.
    */
    at( target:CheckedDate ): CheckedDate|null{
        for( let i = 0; i < this._checkedDates.length; i++ ){
            if( this._checkedDates[i].equals( target ) == true ){
                return this._checkedDates[i];
            }
        }
    return null;
    }

    /**
    * Check whether this object has the target date or not.
    * @param target the object of the class CheckedDate, which you want to search.
    * @returns Returns true if this object has the target, otherwise return false.
    */
    has( target:CheckedDate ): boolean{
        return(this.at( target ) == null ? false : true);
    }

    /**
    * Print to debug.
    */
    print(): void{
        var txt = "";
        for( let i = 0; i < this._checkedDates.length; i++ ){
            txt += this._checkedDates[i].toString() + "\n";
        }
        alert( txt );
    }
};
