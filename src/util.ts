/**
* To create the class name string for the cells.
* @param {*} checkedDateList The DateEx list you want to check.
* @param {*} targetDate The object of the class DateEx you want to check.
* @returns "yc_unchecked_day" or "yc_checked_day"
*/
export function createClassName( checkedDateList:any, targetDate:any ){
    if( checkedDateList == undefined ) return "yc_unchecked_day";
    if( checkedDateList.has( targetDate ) == true ) return "yc_checked_day";
return "yc_unchecked_day";
}
