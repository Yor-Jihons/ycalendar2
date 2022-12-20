/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar2/blob/main/ycalendar2/LICENSE
*/


/**
* The enums to indicate whether the CheckedDate is positive meanings or not.
*/
export let CheckedDateType = {
    Negative: -1,
    Unchecked: 0,
    Positive:  1,
};


/**
* The class, to make it easier to use, which derived from Date.
*/
export class DateEx{
    /**
    * The object of the class Date, which this object manages.
    */
    private _date:Date;

    /**
    * Contructor
    * @param year The year the user want to manage.
    * @param month The month the user want to manage. The value must be from 1 to 12.
    * @param date The date the user want to manage. The value is from 1 to 31.
    */
    constructor( year:number, month:number, date:number = 1 ){
        this._date = new Date( year, month - 1, date, 1, 1, 1, 1 );
    }

    /**
    * Get the year this object managed.
    * @returns The year this object managed.
    */
    getFullYear():number{
        return this._date.getFullYear();
    }

    /**
    * Get the month this object managed.
    * @returns The month this object managed. The value is from 1 to 12.
    */
    getMonth():number{
        return this._date.getMonth() + 1;
    }

    /**
    * Get the date this object managed.
    * @returns The date this object managed. The value is from 1 to 31.
    */
    getDate():number{
        return this._date.getDate();
    }

    /**
    * Get the day of the week this object managed.
    * @returns The day of the week this object managed.
    */
    getDay():number{
        return this._date.getDay();
    }

    /**
    * Create the string for the date.
    * @returns The string for the date which this object managed.
    */
    toDateString(): string{
        return this._date.toDateString();
    }

    /**
    * Check whether date is same or not.
    * @param  d The object of the class DateEx.
    * @returns Returns true if d is same, otherwise returns false.
    */
    equals( d:DateEx ): boolean{
        if( this._date.getFullYear() == d._date.getFullYear()
        && this._date.getMonth() == d._date.getMonth()
        && this._date.getDate() == d._date.getDate() ) return true;
    return false;
    }

    /**
    * Create the object of this class, which means the end of the month.
    * @returns The object of this class, which means the end of the month.
    */
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
    * The type { Positive | Negative }
    */
    private _type:number;

    /**
    * The constructor.
    * @param year The year.
    * @param month The month. The value must be from 1 to 12.
    * @param date The date. The value is from 1 to 31.
    * @param type The type (negative or positive). ( def: CheckedDateType.Positive )
    */
    constructor( year:number, month:number, date:number, type:number = CheckedDateType.Positive ){
        super( year, month, date );
        this._type = type;
    }

    /**
    * Check whether date is same or not.
    * @param d The object of the class CheckedDate.
    * @returns Returns true if d is same, otherwise returns false.
    */
    equals( d:CheckedDate ): boolean{
        return super.equals( d );
    }

    /**
    * Get the data of CheckedDateType.
    * @returns The data of CheckedDateType.
    */
    getType(): number{
        return this._type;
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


/**
* Create the object of the class DateEx, which means today's date.
* @returns The object of the class DateEx, which means today's date.
*/
export function createTodayDateEx(): DateEx{
    let today = new Date();
return new DateEx( today.getFullYear(), today.getMonth() + 1, today.getDate() );
}

/**
* Create the object of the class DateEx, which was made from Date.
* @param date The source Date.
* @returns The object of the class DateEx, which was made from Date.
*/
export function createDateExFromDate( date:Date ): DateEx{
    return new DateEx( date.getFullYear(), date.getMonth() + 1, date.getDate() );
}

/**
* Create the object of the class CheckedDate, which means today's date.
* @param type The enum { CheckedDateType.Positive | CheckedDateType.Negative }. ( def: CheckedDateType.Positive )
* @returns The object of the class CheckedDate, which means today's date.
*/
export function createTodayCheckedDate( type:number = CheckedDateType.Positive ): CheckedDate{
    let today = new Date();
return new CheckedDate( today.getFullYear(), today.getMonth() + 1, today.getDate(), type );
}

/**
* Create the object of the class CheckedDate, which was made from Date.
* @param date The source Date.
* @param type The enum { CheckedDateType.Positive | CheckedDateType.Negative }. ( def: CheckedDateType.Positive )
* @returns The object of the class CheckedDate, which was made from Date.
*/
export function createCheckedDateFromDate( date:Date, type:number = CheckedDateType.Positive ): CheckedDate{
    return new CheckedDate( date.getFullYear(), date.getMonth() + 1, date.getDate(), type );
}
