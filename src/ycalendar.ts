/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar2/blob/main/ycalendar2/LICENSE
*/

import * as TableCreation from "./tablecreation";
import * as CheckedDates from "./checkeddates";



/**
* The class to show the calendar.
*/
export class YCalendar2{
    /**
    * The object of a class, which is derived from the class YC_Event, to use some events.
    */
    private _event:any;

    /**
    * The object of the class CheckedDateList, which manages the DateEx.
    */
    private _checkedDateList:any = null;

    /**
    * The constructor.
    */
    constructor(){
        this._event = null;
    }

    /**
    * The setter for the event.
    * @param yc_event The object of a class, which is derived from the class YC_Event, to use some events.
    */
    setEvent( yc_event:any ): void{
        this._event = yc_event;
    }

    /**
     * The setter for CheckedDateList.
     * @param checkedDateList The object of the class CheckedDateList.
     */
    setCheckedDateList( checkedDateList:CheckedDates.CheckedDateList ): void{
        this._checkedDateList = checkedDateList;
    }

    /**
    * Draw the ycalendar.
    * @param date The object of the class Date.
    * @param checkedDateList The object of the class CheckedDateList. You can pass null.
    */
    draw( date:CheckedDates.DateEx ): void{
        let prevDate = new CheckedDates.DateEx( date.getFullYear(), date.getMonth() - 1, date.getDate() );

        let mainDate_first = date;
        let mainDate_last  = date.createLastDateEx();

        let nextDate = new CheckedDates.DateEx( date.getFullYear(), date.getMonth() + 1, date.getDate() );

        const tableCreator = new TableCreation.TableCreator();

        let htmlText = "";
        htmlText += tableCreator.createTitleHTMLString( prevDate, mainDate_first, nextDate );

        htmlText += tableCreator.createTableHeaderHtmlString();

        const NUM_OF_EMPTY_CELL = mainDate_first.getDay();
        htmlText += tableCreator.createEmptyCells( NUM_OF_EMPTY_CELL );

        const lastDayInMonth   = mainDate_last.getDate();
        htmlText += tableCreator.createMainCells( mainDate_first, lastDayInMonth, this._checkedDateList );

        const MAX_CELL       = 42;
        let num_of_tail_cell = MAX_CELL - (NUM_OF_EMPTY_CELL + lastDayInMonth);
        htmlText += tableCreator.createEmptyCells( num_of_tail_cell );

        htmlText += tableCreator.createTableFooterHtmlString();

        calendar_area.innerHTML = htmlText;
    }

    /**
    * The method for the double-click event.
    * @param year The target year.
    * @param month The target month. The value is from 1 to 12.
    * @param day The target date. The value is from 1 to 31.
    */
    onDoubleClicked( year:number, month:number, day:number ){
        if( this._event != null ){
            this._event.onDoubleClicked( year, month, day );
        }
    }
}


/**
* The main object for the class div#ycalendar.(for HTML)
*/
let calendar_area:any = document.getElementById( "ycalendar2" );

export let ycalendar2 = new YCalendar2();

/**
* The event for prevButton click.
* @param year The target year.
* @param month The target month. The value is from 1 to 12.
*/
export function ycalendar_prevButton_Click( year:number, month:number ): void{
    ycalendar2.draw( new CheckedDates.DateEx( year, month, 1 ) );
}

/**
* The event for nextButton click.
* @param year The target year.
* @param month The target month. The value is from 1 to 12.
*/
export function ycalendar_nextButton_Click( year:number, month:number ): void{
    ycalendar2.draw( new CheckedDates.DateEx( year, month, 1 ) );
}

/**
* The event for the cells doubleclick.
* @param year The target year.
* @param month The target month. The value is from 1 to 12.
* @param date The target date. The value is from 1 to 31.
*/
export function ycalender_DoubleClick( year:number, month:number, date:number ): void{
    ycalendar2.onDoubleClicked( year, month, date );
}
