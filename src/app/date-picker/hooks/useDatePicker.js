import { useCallback } from 'react';
import { useDatePickerContext } from './useDatePickerContext';
import { ACTIVE_SECTION, DIRECTION, MONTHS_NAMES } from '../utils/constant';

export const useDatePicker = () => {
    const context = useDatePickerContext();
    const {
        recurrence,
        setRecurrence,
        activeSection,
        setActiveSection,
        isCalendarVisible,
        setCalendarVisible,
        selectedDate,
        setSelectedDate,
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
        yearRangeStart,
        setYearRangeStart
    } = context;

    const handlePatternChange = (e) => {
        const patternValue = e?.target?.value || ""
        setRecurrence((prev) => ({ ...prev, pattern: patternValue }));
    };
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const getDaysInMonth = (year, month) => {
        const days = [];
        const date = new Date(year, month, 1); // Creates a Date object representing the 1st day of the given month
        const firstDay = date.getDay(); // Returns the index (0-6) of the day of the week for the 1st day of the month (0 = Sunday, 1 = Monday, etc.)
        const lastDay = new Date(year, month + 1, 0).getDate(); // Gets the last day of the given month by creating a Date object for the last day of the next month and calling .getDate()
        const prevMonthDays = [];
        if (firstDay > 0) { //we pass 0 for sun in our day list because our day start with sun in calender UI so here we check for 0 index
            const prevMonth = month === 0 ? MONTHS_NAMES.length - 1 : month - 1;
            const prevYear = month === 0 ? year - 1 : year;
            const prevMonthLastDay = new Date(prevYear, prevMonth + 1, 0).getDate();

            for (let i = prevMonthLastDay - firstDay + 1; i <= prevMonthLastDay; i++) {
                prevMonthDays.push(new Date(prevYear, prevMonth, i));
            }
        }

        days.push(...prevMonthDays);
        for (let i = 1; i <= lastDay; i++) {
            days.push(new Date(year, month, i));
        }
        const totalDays = days.length;
        const remainingSlots = 42 - totalDays; // 6 weeks x 7 days
        const nextMonthDays = [];
        for (let i = 1; i <= remainingSlots; i++) {
            nextMonthDays.push(new Date(year, month + 1, i));
        }
        days.push(...nextMonthDays);
        return days;
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleYearRangeChange = (direction) => {
        const rangeVal = {
            [DIRECTION.PREV]: (prev) => Math.max(prev - 10, 1), // year>0 always
            [DIRECTION.NEXT]: (prev) => prev + 10,
        };

        setYearRangeStart((prev) => {
            const updateFn = rangeVal?.[direction];
            return updateFn ? updateFn(prev) : prev;
        });
    };

    const handleYearSelection = (year) => {
        setCurrentYear(year);
        setActiveSection(ACTIVE_SECTION.MONTHS)
    };

    const handleMonthSelection = (month) => {
        setCurrentMonth(month);
        setActiveSection(ACTIVE_SECTION.CALENDAR)
    };
    const handleCancel = () => {
        setCalendarVisible(false);
        handleSectionClick(ACTIVE_SECTION.CALENDAR);
    };

    const handleDone = () => {
        setRecurrence((prev) => ({ ...prev, startDate: selectedDate }));
        handleCancel()
    };
    const handleMonthChange = (direction) => {
        if (!direction) return;

        const isPrevDirection = direction === DIRECTION.PREV;
        const isFirstMonth = currentMonth === 0;
        const isLastMonth = currentMonth === MONTHS_NAMES.length - 1;
        const newMonth = isPrevDirection
            ? (isFirstMonth ? MONTHS_NAMES.length - 1 : currentMonth - 1)
            : (isLastMonth ? 0 : currentMonth + 1);

        const newYear = isPrevDirection
            ? (isFirstMonth ? currentYear - 1 : currentYear)
            : (isLastMonth ? currentYear + 1 : currentYear);

        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };
    const handleSectionClick = (activeSection = ACTIVE_SECTION.YEARS) => {
        setActiveSection(activeSection)
    };
    return {
        recurrence,
        setRecurrence,
        activeSection,
        setActiveSection,
        isCalendarVisible,
        setCalendarVisible,
        selectedDate,
        setSelectedDate,
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
        yearRangeStart,
        getDaysInMonth,
        handleDateChange,
        setYearRangeStart,
        handlePatternChange,
        handleYearSelection,
        handleYearRangeChange,
        handleMonthSelection,
        handleCancel,
        handleDone,
        handleSectionClick,
        handleMonthChange
    };
};
