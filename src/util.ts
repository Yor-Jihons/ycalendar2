/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar2/blob/main/ycalendar2/LICENSE
*/

import * as CheckedDates from "./checkeddates";

/**
* To create the class name string for the cells.
* @param checkedDateList The object of the class CheckedDateList, which means the DateEx list you want to check.
* @param targetDate The object of the class CheckedDate you want to check.
* @returns "yc_unchecked_day" or "yc_checked_day"
*/
export function createClassName( checkedDateList:CheckedDates.CheckedDateList, targetDate:CheckedDates.CheckedDate ): string{
    if( checkedDateList == undefined || checkedDateList == null ) return "yc_unchecked_day";
    if( checkedDateList.has( targetDate ) == true ) return "yc_checked_day";
return "yc_unchecked_day";
}
