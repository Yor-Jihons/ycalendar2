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