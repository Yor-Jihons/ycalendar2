import * as CheckedDates from "../src/checkeddates";


describe('Test for util.ts', () => {
    test( 'Sample of the CheckedDateType as enums', () => {
        let obj1 = new Date( 2022, 12, 11 );
        expect( CheckedDates.CheckedDateType.Unchecked ).toBe( 0 );
        expect( CheckedDates.CheckedDateType.Negative ).toBe( -1 );
        expect( CheckedDates.CheckedDateType.Positive ).toBe( 1 );
    });

    test('Sample of the class DateEx', () => {
        // 12/28/2022 Wed.
        let obj1 = new CheckedDates.DateEx( 2022, 12, 28 );
        expect( obj1.getFullYear() ).toBe( 2022 );
        expect( obj1.getMonth() ).toBe( 12 );
        expect( obj1.getDate() ).toBe( 28 );
        expect( obj1.getDay() ).toBe( 3 );

        // Should be 12/31/2022 Sat.
        let obj2 = obj1.createLastDateEx();
        expect( obj2.getFullYear() ).toBe( 2022 );
        expect( obj2.getMonth() ).toBe( 12 );
        expect( obj2.getDate() ).toBe( 31 );
        expect( obj2.getDay() ).toBe( 6 );

        let obj3 = new CheckedDates.DateEx( 2022, 12, 28 );
        expect( obj3.equals( obj1 ) ).toBe( true );

        let obj4 = new CheckedDates.DateEx( 2022, 12, 3 );
        expect( obj4.equals( obj1 ) ).toBe( false );

        expect( obj4.toDateString() ).toBe( "Sat Dec 03 2022" );
    });

    test('Sample of the class CheckedDate', () => {
        // 12/28/2022 Wed.
        let obj1 = new CheckedDates.CheckedDate( 2022, 12, 28 );
        expect( obj1.getFullYear() ).toBe( 2022 );
        expect( obj1.getMonth() ).toBe( 12 );
        expect( obj1.getDate() ).toBe( 28 );
        expect( obj1.getDay() ).toBe( 3 );
        expect( obj1.getType() ).toBe( CheckedDates.CheckedDateType.Positive );

        // Should be 12/31/2022 Sat.
        let obj2 = obj1.createLastDateEx();
        expect( obj2.getFullYear() ).toBe( 2022 );
        expect( obj2.getMonth() ).toBe( 12 );
        expect( obj2.getDate() ).toBe( 31 );
        expect( obj2.getDay() ).toBe( 6 );

        let obj3 = new CheckedDates.CheckedDate( 2022, 12, 28 );
        expect( obj3.equals( obj1 ) ).toBe( true );

        let obj4 = new CheckedDates.CheckedDate( 2022, 12, 3 );
        expect( obj4.equals( obj1 ) ).toBe( false );

        expect( obj4.toDateString() ).toBe( "Sat Dec 03 2022" );
    });

    test( 'Sample of the class CheckedDateList', () =>{
        let list = new CheckedDates.CheckedDateList();
        let d1 = new CheckedDates.CheckedDate( 2022, 12, 1, CheckedDates.CheckedDateType.Positive );
        let d2 = new CheckedDates.CheckedDate( 2022, 12, 10, CheckedDates.CheckedDateType.Negative );
        let d3 = new CheckedDates.CheckedDate( 2022, 12, 22, CheckedDates.CheckedDateType.Positive );
        let d4 = new CheckedDates.CheckedDate( 2022, 12, 30, CheckedDates.CheckedDateType.Negative );
        list.add( d1 );
        list.add( d2 );
        list.add( d3 );
        list.add( d4 );

        let d5 = new CheckedDates.CheckedDate( 2022, 12, 30, CheckedDates.CheckedDateType.Positive );

        expect( list.at( d2 ) ).toBe( d2 );
        expect( list.at( d5 ) ).toBe( d4 );
        expect( list.at( new CheckedDates.CheckedDate( 2022, 12, 2 ) ) ).toBe( null );

        expect( list.has( d2 ) ).toBe( true );
        expect( list.has( d5 ) ).toBe( true );
        expect( list.has( new CheckedDates.CheckedDate( 2022, 12, 2 ) ) ).toBe( false );

        list.clear();
        expect( list.has( d2 ) ).toBe( false );
        expect( list.has( d5 ) ).toBe( false );
        expect( list.has( new CheckedDates.CheckedDate( 2022, 12, 2 ) ) ).toBe( false );
    });

    test('Sample of the function createTodayDateEx', () => {
        // 12/28/2022 Wed.
        let obj1 = CheckedDates.createTodayDateEx();
        let today = new Date();
        expect( obj1.getFullYear() ).toBe( today.getFullYear() );
        expect( obj1.getMonth() ).toBe( today.getMonth() + 1 );
        expect( obj1.getDate() ).toBe( today.getDate() );
        expect( obj1.getDay() ).toBe( today.getDay() );
    });

    test('Sample of the function createTodayCheckedDate', () => {
        let obj1 = CheckedDates.createTodayCheckedDate();
        let today = new Date();
        expect( obj1.getFullYear() ).toBe( today.getFullYear() );
        expect( obj1.getMonth() ).toBe( today.getMonth() + 1 );
        expect( obj1.getDate() ).toBe( today.getDate() );
        expect( obj1.getDay() ).toBe( today.getDay() );
    });

    test( 'Sample of the function createDateExFromDate', () => {
        let obj1 = new Date( 2022, 12, 11 );
        let obj2 = CheckedDates.createDateExFromDate( obj1 );
        expect( obj2.getFullYear() ).toBe( obj1.getFullYear() );
        expect( obj2.getMonth() ).toBe( obj1.getMonth() + 1 );
        expect( obj2.getDate() ).toBe( obj1.getDate() );
        expect( obj2.getDay() ).toBe( obj1.getDay() );
    });

    test( 'Sample of the function createCheckedDateFromDate', () => {
        let obj1 = new Date( 2022, 12, 11 );
        let obj2 = CheckedDates.createCheckedDateFromDate( obj1 );
        expect( obj2.getFullYear() ).toBe( obj1.getFullYear() );
        expect( obj2.getMonth() ).toBe( obj1.getMonth() + 1 );
        expect( obj2.getDate() ).toBe( obj1.getDate() );
        expect( obj2.getDay() ).toBe( obj1.getDay() );
    });
});
