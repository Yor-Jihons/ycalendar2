import * as Util from '../src/util';
import * as CheckedDates from "../src/checkeddates";


describe('Test for util.ts', () => {
    test('sample1', () => {
        let checkDateList = new CheckedDates.CheckedDateList();

        let ret1 = Util.createClassName( checkDateList, new CheckedDates.CheckedDate( 2022, 12, 28 ) );

        expect( ret1 ).toBe( "yc_unchecked_day" );
    });

    test('sample2', () => {
        let checkDateList = new CheckedDates.CheckedDateList();

        checkDateList.add( new CheckedDates.CheckedDate( 2022, 12, 10 ) );
        checkDateList.add( new CheckedDates.CheckedDate( 2022, 12, 28, CheckedDates.CheckedDateType.Negative ) );
        checkDateList.add( new CheckedDates.CheckedDate( 2022, 12, 30, CheckedDates.CheckedDateType.Positive ) );

        expect( Util.createClassName( checkDateList, new CheckedDates.CheckedDate( 2022, 12, 1 ) ) ).toBe( "yc_unchecked_day" );
        expect( Util.createClassName( checkDateList, new CheckedDates.CheckedDate( 2022, 12, 10 ) ) ).toBe( "yc_positive_checked_day" );
        expect( Util.createClassName( checkDateList, new CheckedDates.CheckedDate( 2022, 12, 28 ) ) ).toBe( "yc_negative_checked_day" );
        expect( Util.createClassName( checkDateList, new CheckedDates.CheckedDate( 2022, 12, 30 ) ) ).toBe( "yc_positive_checked_day" );
        expect( Util.createClassName( checkDateList, new CheckedDates.CheckedDate( 2022, 12, 31 ) ) ).toBe( "yc_unchecked_day" );
    });
});
