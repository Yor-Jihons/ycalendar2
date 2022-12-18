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
    CheckedDateList: any;
    createTodayDateEx(): any;
    createTodayCheckedDate(): any;
    drawYcalendar( date:any, checkedDateList:any, event:any ): void;
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
        YEvent: class extends XEvent.Event{},

        DateEx: class extends CheckedDates.DateEx{
            constructor( year:number, month:number, date:number ){
                super( year, month, date );
            }
        },

        CheckedDate: class extends CheckedDates.CheckedDate{
            constructor( year:number, month:number, date:number ){
                super( year, month, date );
            }
        },

        CheckedDateList: class extends CheckedDates.CheckedDateList{},

        createTodayDateEx: () => {
            return CheckedDates.createTodayDateEx();
        },

        createTodayCheckedDate: () => {
            return CheckedDates.createTodayCheckedDate();
        },

        drawYcalendar: ( date:any, checkedDateList:any, event:any ) => {
            if( checkedDateList !== null ) ycalendars.ycalendar2.setCheckedDateList( checkedDateList );
            if( event !== null ) ycalendars.ycalendar2.setEvent( event );
            ycalendars.ycalendar2.draw( date );
        },

        ycalendar_prevButton_Click: ( year:number, month:number ): void => {
            ycalendars.ycalendar_prevButton_Click( year, month );
        },

        ycalendar_nextButton_Click: ( year:number, month:number ): void => {
            ycalendars.ycalendar_nextButton_Click( year, month );
        },

        ycalender_DoubleClick: ( year:number, month:number, day:number ): void => {
            ycalendars.ycalender_DoubleClick( year, month, day );
        }
    };
})();

// 4. Add the intefaces.
window.YCalendar2 = YCalendar2;


// ---------------------------------------------------
