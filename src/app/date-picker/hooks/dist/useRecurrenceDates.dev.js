"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

/**
 * @param {Date[]} dateObjects 
 * @param {Date} selectedDate
 * @param {string} recurrenceType 
 * @returns {Date[]}
 */
function useRecurrenceDates(dateObjects, selectedDate, recurrenceType) {
  var datesArray = (0, _react.useMemo)(function () {
    return dateObjects.map(function (date) {
      return new Date(date);
    });
  }, [dateObjects]);
  var selectedDay = (0, _react.useMemo)(function () {
    return new Date(selectedDate).getDate();
  }, [selectedDate]);
  var selectedMonth = (0, _react.useMemo)(function () {
    return new Date(selectedDate).getMonth();
  }, [selectedDate]);
  var selectedYear = (0, _react.useMemo)(function () {
    return new Date(selectedDate).getFullYear();
  }, [selectedDate]);
  var selectedDateObj = (0, _react.useMemo)(function () {
    return new Date(selectedDate);
  }, [selectedDate]); // Function to generate dates based on recurrence type

  var recurrenceFunctions = {
    daily: function daily(startDate, endDate) {
      var dates = [];
      var currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        if (currentDate >= selectedDateObj) {
          dates.push(new Date(currentDate));
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    },
    weekly: function weekly(startDate, endDate) {
      var dates = [];
      var currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        if (currentDate.getDay() === selectedDateObj.getDay() && currentDate >= selectedDateObj) {
          dates.push(new Date(currentDate));
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    },
    monthly: function monthly(startDate, endDate) {
      var dates = [];
      var currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        if (currentDate >= selectedDateObj) {
          // Set the day to the selected day of the month
          currentDate.setDate(selectedDay);

          if (currentDate >= selectedDateObj && currentDate <= endDate) {
            dates.push(new Date(currentDate));
          }
        }

        currentDate.setMonth(currentDate.getMonth() + 1);
      }

      return dates;
    },
    yearly: function yearly(startDate, endDate) {
      var dates = [];
      var currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        if (currentDate >= selectedDateObj) {
          // Set the month and day to the selected month and day
          currentDate.setMonth(selectedMonth);
          currentDate.setDate(selectedDay);

          if (currentDate >= selectedDateObj && currentDate <= endDate) {
            dates.push(new Date(currentDate));
          }
        }

        currentDate.setFullYear(currentDate.getFullYear() + 1);
      }

      return dates;
    }
  }; // Calculate the recurrence dates

  var recurrenceDates = (0, _react.useMemo)(function () {
    if (datesArray.length === 0) {
      // console.error('Invalid date input.');
      return [];
    }

    var endDate = datesArray[datesArray.length - 1];
    var recurrenceFunction = recurrenceFunctions[recurrenceType];

    if (!recurrenceFunction) {
      // console.error('Invalid recurrence type.');
      return [];
    }

    return recurrenceFunction(new Date(datesArray[0]), endDate);
  }, [datesArray, recurrenceType, selectedDay, selectedMonth, selectedDateObj]);
  return recurrenceDates;
}

var _default = useRecurrenceDates;
exports["default"] = _default;