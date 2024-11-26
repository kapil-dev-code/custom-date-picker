"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIRECTION = exports.ACTIVE_SECTION = exports.MONTHS_NAMES = exports.RECURRENCE_PATTERNS = exports.DAY_NAMES = void 0;
var DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
exports.DAY_NAMES = DAY_NAMES;
var RECURRENCE_PATTERNS = ["daily", "weekly", "monthly", "yearly"];
exports.RECURRENCE_PATTERNS = RECURRENCE_PATTERNS;
var MONTHS_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.MONTHS_NAMES = MONTHS_NAMES;
var ACTIVE_SECTION = {
  CALENDAR: "calendar",
  YEARS: "years",
  MONTHS: "months"
};
exports.ACTIVE_SECTION = ACTIVE_SECTION;
var DIRECTION = {
  NEXT: "next",
  PREV: "prev"
};
exports.DIRECTION = DIRECTION;