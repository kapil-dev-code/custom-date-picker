import { useMemo } from 'react';
/**
 * @param {Date[]} dateObjects 
 * @param {Date} selectedDate
 * @param {string} recurrenceType 
 * @returns {Date[]}
 */
function useRecurrenceDates(dateObjects, selectedDate, recurrenceType) {
    const datesArray = useMemo(() => dateObjects.map(date => new Date(date)), [dateObjects]);
    const selectedDay = useMemo(() => new Date(selectedDate).getDate(), [selectedDate]);
    const selectedMonth = useMemo(() => new Date(selectedDate).getMonth(), [selectedDate]);
    const selectedYear = useMemo(() => new Date(selectedDate).getFullYear(), [selectedDate]);
    const selectedDateObj = useMemo(() => new Date(selectedDate), [selectedDate]);

    // Function to generate dates based on recurrence type
    const recurrenceFunctions = {
        daily: (startDate, endDate) => {
            const dates = [];
            let currentDate = new Date(startDate);
            while (currentDate <= endDate) {
                if (currentDate >= selectedDateObj) {
                    dates.push(new Date(currentDate));
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return dates;
        },
        weekly: (startDate, endDate) => {
            const dates = [];
            let currentDate = new Date(startDate);
            while (currentDate <= endDate) {
                if (currentDate.getDay() === selectedDateObj.getDay() && currentDate >= selectedDateObj) {
                    dates.push(new Date(currentDate));
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return dates;
        },
        monthly: (startDate, endDate) => {
            const dates = [];
            let currentDate = new Date(startDate);
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
        yearly: (startDate, endDate) => {
            const dates = [];
            let currentDate = new Date(startDate);
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
    };
    const recurrenceDates = useMemo(() => {
        if (datesArray.length === 0) {
            console.error('Invalid date input.');
            return [];
        }
        const endDate = datesArray?.at(-1);
        const recurrenceFunction = recurrenceFunctions?.[recurrenceType];
        if (!recurrenceFunction) {
            // console.error('Invalid recurrence type.');
            return [];
        }

        return recurrenceFunction(new Date(datesArray?.at(0)), endDate);
    }, [datesArray, recurrenceType, selectedDay, selectedMonth, selectedDateObj]);

    return recurrenceDates;
}

export default useRecurrenceDates;
