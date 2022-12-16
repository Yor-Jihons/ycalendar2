import * as Util from "./util";
import * as XEvent from "./event";
import * as CheckedDates from "./checkeddates";
import * as ycalendars from "./ycalendar";

class Test1{
    constructor(){
        
    }
}

class Test2{
    state:boolean;
    constructor(state:boolean){
        this.state = state;
    }

    has( obj:any ){
        return this.state;
    }
}


function test( state:boolean ){
    let test1 = new Test1();
    let test2 = new Test2( state );
    let s:string = Util.createClassName( test2, test1 );
    console.log( "test = " + s );

    let obj1 = new XEvent.Event();
    obj1.onDoubleClicked( 1, 1, 1 );
}

test(true);

// ---------------------------------------------------
// HTMLからも使えるようにする


// 1. The inteface definition so that the users can use.
interface YCalendar2{
    YEvent: any;
    CheckedDate: any;
    CheckedDateList: any;
    drawYcalendar( date:Date, checkedDateList:any, event:any ): void;
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

        CheckedDate: class extends CheckedDates.CheckedDate{
            constructor( year:number, month:number, day:number ){
                super( year, month, day );
            }
        },

        CheckedDateList: class extends CheckedDates.CheckedDateList{},

        drawYcalendar: ( date:Date, checkedDateList:any, event:any ) => {
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
