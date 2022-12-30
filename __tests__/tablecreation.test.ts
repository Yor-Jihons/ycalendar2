import * as CheckedDates from "../src/checkeddates";
import * as TableCreation from "../src/tablecreation";


describe('Test for tablecreation.ts', () => {
    test( 'Sample of the class TableCreator', () => {
        let creator:TableCreation.TableCreator = new TableCreation.TableCreator();

        let prevDate:CheckedDates.DateEx = new CheckedDates.DateEx( 2022, 11 );
        let mainDate:CheckedDates.DateEx = new CheckedDates.DateEx( 2022, 12 );
        let nextDate:CheckedDates.DateEx = new CheckedDates.DateEx( 2023, 1 );

        let ret1_should_be = "<h2 id=\"yc_title\"><a title=\"2022/11\" onclick=\"YCalendar2.ycalendar_prevButton_Click(2022, 11)\">◀</a> 2022/12 <a title=\"2023/1\" onclick=\"YCalendar2.ycalendar_nextButton_Click(2023, 1)\">▶</a></h2>";
        expect( creator.createTitleHTMLString( prevDate, mainDate, nextDate ) ).toBe( ret1_should_be );

        let ret2_should_be = "<table id=\"yc_table\"><tr><th class=\"yc_table_header\">Sun</th><th class=\"yc_table_header\">Mon</th><th class=\"yc_table_header\">Thue</th><th class=\"yc_table_header\">Wed</th><th class=\"yc_table_header\">Thu</th><th class=\"yc_table_header\">Fri</th><th class=\"yc_table_header\">Sat</th></tr><tr>";
        expect( creator.createTableHeaderHtmlString() ).toBe( ret2_should_be );

        let ret3_should_be = "<td class=\"yc_unchecked_day\">&nbsp;</td>";
        expect( creator.createEmptyCells( 1 ) ).toBe( ret3_should_be );

        let lastDayInMonth = 1;
        let checkedDateList = new CheckedDates.CheckedDateList();
        let ret4_should_be = "<td class=\"yc_unchecked_day\"><div ondblclick=\"YCalendar2.ycalender_DoubleClick(2022,12,1)\">1</div></td>";
        expect( creator.createMainCells( mainDate, lastDayInMonth, checkedDateList ) ).toBe( ret4_should_be );

        expect( creator.createTableFooterHtmlString() ).toBe( "</table>" );
    });
});
