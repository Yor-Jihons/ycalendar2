/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar2/blob/main/ycalendar2/LICENSE
*/

import * as XEvent from "./event";
import * as CheckedDates from "./checkeddates";
import * as ycalendars from "./ycalendar";


// ---------------------------------------------------
// HTMLからも使えるようにする


// 1. The inteface definition so that the users can use.
interface YCalendar2{
    YEvent: any;
    DateEx: any;
    CheckedDate: any;
    CheckedDateType: any;
    CheckedDateList: any;
    createTodayDateEx(): CheckedDates.DateEx;
    createTodayCheckedDate( type:number ): CheckedDates.CheckedDate;
    createDateExFromDate( date:Date ): CheckedDates.DateEx;
    createCheckedDateFromDate( date:Date, type:number ): CheckedDates.CheckedDate;
    drawYcalendar( date:CheckedDates.CheckedDate, checkedDateList:CheckedDates.CheckedDateList, event:XEvent.Event ): void;
    ycalendar_prevButton_Click( year:number, month:number ): void;
    ycalendar_nextButton_Click( year:number, month:number ): void;
    ycalender_DoubleClick( year:number, month:number, day:number ): void;
}

// 2. Add (1) into the global.window. (window.[...] = ... の左辺)
declare global {
    interface Window {
        YCalendar2: YCalendar2;
    }
}

const YCalendar2: YCalendar2 = (() =>{
    return {
        /**
        * The enum to indicate whether the positive checked cell or negetive checked cell.
        */
        CheckedDateType: {
            Negative: CheckedDates.CheckedDateType.Negative,
            Unchecked: CheckedDates.CheckedDateType.Unchecked,
            Positive: CheckedDates.CheckedDateType.Positive,
        },

        /**
        * The event class for double-click the cells.
        */
        YEvent: class extends XEvent.Event{},

        /**
        * The class to manage the date.
        */
        DateEx: class extends CheckedDates.DateEx{
            /**
            * Constructor
            * @param year The year the user want to manage.
            * @param month The month the user want to manage. The value must be from 1 to 12.
            * @param date The date the user want to manage. The value is from 1 to 31. (def: 1)
            */
            constructor( year:number, month:number, date:number = 1 ){
                super( year, month, date );
            }
        },

        /**
        * The class to manage the date with the type.
        */
        CheckedDate: class extends CheckedDates.CheckedDate{
            /**
            * Constructor
            * @param year The year the user want to manage.
            * @param month The month the user want to manage. The value must be from 1 to 12.
            * @param date The date the user want to manage. The value is from 1 to 31. (def: 1)
            * @param type The type (negative or positive). ( def: CheckedDateType.Positive )
            */
            constructor( year:number, month:number, date:number = 1, type = CheckedDates.CheckedDateType.Positive ){
                super( year, month, date, type );
            }
        },

        /**
        * The class to manage the dates (as DateEx).
        */
        CheckedDateList: class extends CheckedDates.CheckedDateList{},

        /**
        * Create the object of the class DateEx, which means today's date.
        * @returns The object of the class DateEx, which means today's date.
        */
        createTodayDateEx: (): CheckedDates.DateEx => {
            return CheckedDates.createTodayDateEx();
        },

        /**
        * Create the object of the class CheckedDate, which means today's date.
        * @param type The enum { CheckedDateType.Positive | CheckedDateType.Negative }. ( def: CheckedDateType.Positive )
        * @returns The object of the class CheckedDate, which means today's date.
        */
        createTodayCheckedDate: ( type:number = CheckedDates.CheckedDateType.Positive ): CheckedDates.CheckedDate => {
            return CheckedDates.createTodayCheckedDate( type );
        },

        /**
        * Create the object of the class DateEx made from the Date.
        * @param date The object of the Date, as a source.
        * @returns The object of the class DateEx made from the Date.
        */
        createDateExFromDate: ( date:Date ): CheckedDates.DateEx => {
            return CheckedDates.createDateExFromDate( date );
        },

        /**
        * Create the object of the class DateEx made from the Date.
        * @param date The object of the Date, as a source.
        * @param type The enum { CheckedDateType.Positive | CheckedDateType.Negative }. ( def: CheckedDateType.Positive )
        * @returns The object of the class DateEx made from the Date.
        */
        createCheckedDateFromDate: ( date:Date, type:number = CheckedDates.CheckedDateType.Positive ): CheckedDates.CheckedDate => {
            return CheckedDates.createCheckedDateFromDate( date, type );
        },

        /**
        * Draw the ycalendar.
        * @param date The object of the class CheckedDate.
        * @param checkedDateList The object of the class CheckedDateList. You can pass null.
        * @param event The event which is derived from the class YEvent.
        */
        drawYcalendar: ( date:CheckedDates.CheckedDate, checkedDateList:CheckedDates.CheckedDateList, event:XEvent.Event ): void => {
            if( checkedDateList !== null ) ycalendars.ycalendar2.setCheckedDateList( checkedDateList );
            if( event !== null ) ycalendars.ycalendar2.setEvent( event );
            ycalendars.ycalendar2.draw( date );
        },

        /**
        * The event when the user clicked prev button.
        * @param year The previous year.
        * @param month The previous month.
        */
        ycalendar_prevButton_Click: ( year:number, month:number ): void => {
            ycalendars.ycalendar_prevButton_Click( year, month );
        },

        /**
        * The event when the user clicked next button.
        * @param year The next year.
        * @param month The next month.
        */
        ycalendar_nextButton_Click: ( year:number, month:number ): void => {
            ycalendars.ycalendar_nextButton_Click( year, month );
        },

        /**
        * The event when the user clicked the cells.
        * @param year The year clicked by the user.
        * @param month The month clicked by the user.
        * @param date The day clicked by the user.
        */
        ycalender_DoubleClick: ( year:number, month:number, date:number ): void => {
            ycalendars.ycalender_DoubleClick( year, month, date );
        }
    };
})();

// 4. Add the intefaces.
window.YCalendar2 = YCalendar2;


// ---------------------------------------------------
