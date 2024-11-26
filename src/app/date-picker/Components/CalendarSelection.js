import React from 'react'
import { useDatePicker } from '../hooks/useDatePicker';
import { DAY_NAMES } from '../utils/constant';
import useRecurrenceDates from '../hooks/useRecurrenceDates';

const CalendarSelection = () => {
    const { currentYear, currentMonth, selectedDate, handleDateChange, getDaysInMonth, recurrence } = useDatePicker()
    const days = structuredClone(getDaysInMonth(currentYear, currentMonth));
    const recurrenceDates = useRecurrenceDates(days, selectedDate, recurrence?.pattern)
    function dateExists(dateToCheck) {
        const isDateExist = recurrenceDates?.some(date => date?.getTime() === dateToCheck?.getTime());
        return isDateExist
    }
    const getClassNames = (day) => {
        if (day.toDateString() === selectedDate.toDateString()) {
            return 'bg-blue-500 text-white font-serif shadow-lg shadow-blue-500/50 brightness-125';
        }
        if (day.getMonth() !== currentMonth && dateExists(day)) {
            return 'bg-blue-100 font-serif text-gray-400';
        }
        if (dateExists(day)) {
            return "bg-blue-200 font-serif"
        }
        if (day.getMonth() !== currentMonth) {
            return 'text-gray-400 transition hover:font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-white duration-300';

        }
        return 'transition hover:font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 hover:text-white duration-300';
    };
    return (
        <div className="grid grid-cols-7 gap-2 mt-2 ">
            {DAY_NAMES.map((dayName) => (
                <div key={dayName} className="text-lg font-semibold text-gray-700 text-center">
                    {dayName}
                </div>
            ))}
            {days.map((day, idx) => (
                <div
                    key={"day_container" + idx}
                    className={`font-semibold text-gray-600 rounded-2xl p-2  cursor-pointer text-center font-sans  ${getClassNames(day)}`}
                    onClick={() => handleDateChange(day)}
                >
                    {day.getDate()}
                </div>
            ))}
        </div>
    );
};


export default CalendarSelection