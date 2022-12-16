import * as Util from "./util";
import * as XEvent from "./event";
import * as CheckedDates from "./checkeddates";


/**
* The class to make the html string as a calendar.
*/
export class TableCreator{

    /**
    * The constant value as a number of days a week.
    */
    private MAX_DAY_OF_WEEK = 7;

    /**
    * The counter to count the cells which you've made.
    */
    private _cellCounter:number;

    /**
    * The constructor.
    */
    constructor(){
        this._cellCounter = 1;
    }

    /**
    * Create the title html text for ycalendar.
    * @param prevDate The object of the class Date as a previous manth.
    * @param mainDate The object of the class Date as a this manth.
    * @param nextDate The object of the class Date as a next manth.
    * @returns The html string as a title.
    */
    createTitleHTMLString( prevDate:Date, mainDate:Date, nextDate:Date ): string{
        var titleHtml = "";
        titleHtml += '<h2 id="yc_title"><a title="' + prevDate.getFullYear() + '/' + (prevDate.getMonth() + 1) + '" onclick="YCalendar2.ycalendar_prevButton_Click(' + prevDate.getFullYear() + ', ' + prevDate.getMonth() + ')">◀</a> ';
        titleHtml += mainDate.getFullYear() + '/' + (mainDate.getMonth() + 1);
        titleHtml += ' <a title="' + nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '" onclick="YCalendar2.ycalendar_nextButton_Click(' + nextDate.getFullYear() + ', ' + nextDate.getMonth() + ')">▶</a></h2>';
    return titleHtml;
    }

    /**
    * Create the header for the ycalendar table.
    * @returns The html string as a header for ycalendar.
    */
    createTableHeaderHtmlString(): string{
        var tableHeaderHtml = "";
        tableHeaderHtml += '<table id="yc_table">';
        tableHeaderHtml += '<tr><th class="yc_table_header">Sun</th><th class="yc_table_header">Mon</th><th class="yc_table_header">Thue</th>';
        tableHeaderHtml += '<th class="yc_table_header">Wed</th><th class="yc_table_header">Thu</th><th class="yc_table_header">Fri</th><th class="yc_table_header">Sat</th></tr>';
        tableHeaderHtml += '<tr>';
    return tableHeaderHtml;
    }

    /**
    * Create the empty cells for the table of yalendar.
    * @param max The max number of cells.
    * @returns The html string as an empty cell.
    */
    createEmptyCells( max:number ): string{
        let txt = "";
        for( var i = 0; i < max; i++ ){
            txt += '<td class="yc_unchecked_day">&nbsp;</td>';
            if( this._cellCounter % this.MAX_DAY_OF_WEEK == 0 ) txt += "</tr><tr>";
            this._cellCounter++;
        }
    return txt;
    }

    /**
    * Create the cell which has number (as a calendar).
    * @param mainDate The object of the class Date.
    * @param lastDayInMonth The number of the date which this manth has.
    * @param checkedDateList The object of the class CheckedDateList, for coloring cells.
    * @returns The html string as a number cell.
    */
    createMainCells( mainDate:Date, lastDayInMonth:number, checkedDateList:CheckedDates.CheckedDateList ): string{
        let txt = "";
        for( var i = 0; i < lastDayInMonth; i++ ){
            const classname = Util.createClassName( checkedDateList, new CheckedDates.CheckedDate( mainDate.getFullYear(), mainDate.getMonth(), i + 1 ) );
            txt += '<td class="' + classname + '">';
            txt += '<div ondblclick="YCalendar2.ycalender_DoubleClick(' + mainDate.getFullYear() + ',' + (mainDate.getMonth() + 1) + ',' + (i + 1) + ')">';
            txt += (i + 1);
            txt += '</div>';
            txt += '</td>';
            if( this._cellCounter % this.MAX_DAY_OF_WEEK == 0 ) txt += "</tr><tr>";
            this._cellCounter++;
        }
    return txt;
    }

    /**
    * Create the footer for the ycalendar table.
    * @returns The html string as a footer for ycalendar.
    */
    createTableFooterHtmlString(): string{
        return "</table>";
    }
}
