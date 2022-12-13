/**
* @file
* @license
* Copyright (c) 2022 Yor-Jihons
* Released under the MIT license.
* https://github.com/Yor-Jihons/ycalendar2/blob/main/ycalendar2/LICENSE
*/

/**
* The Event for ycalendar.
* If you want to double click, implement the method onDoubleClicked.
*/
export class Event{
    /**
    * The event for ycalendar.
    * If some cells double-clicked, this event will run.
    * @param {*} year The year.
    * @param {*} month The month. { 1, 2, 3, ... 11, 12 }
    * @param {*} day The date. { 1, 2, 3, ... }
    */
    onDoubleClicked( year:number, month:number, day:number ){}
}
