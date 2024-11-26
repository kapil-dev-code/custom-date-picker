"use client";
import React, { useCallback } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import { ACTIVE_SECTION } from '../utils/constant';
import CalendarSelection from './CalendarSelection';
import YearSelection from './YearSelection';
import MonthSelection from './MonthSelection';
import { useDatePicker } from '../hooks/useDatePicker';
import ButtonContainer from './ButtonContainer';
import MonthDirection from './MonthDirection';
import HeadingDate from './HeadingDate';
import useClickOutside from '../hooks/useClickOutside';


const CustomDatePicker = () => {
    const { recurrence, activeSection, isCalendarVisible, setCalendarVisible } = useDatePicker();

    const handleClickOutside = () => {
        setCalendarVisible(false);
    };

    const calendarRef = useClickOutside(handleClickOutside);

    const ActiveSelection = useCallback(() => {
        const selectionList = {
            [ACTIVE_SECTION.CALENDAR]: <CalendarSelection />,
            [ACTIVE_SECTION.YEARS]: <YearSelection />,
            [ACTIVE_SECTION.MONTHS]: <MonthSelection />
        };
        return selectionList?.[activeSection] || <></>;
    }, [activeSection]);

    return (
        <div className="relative rounded-lg" ref={calendarRef}>
            <button
                onClick={() => setCalendarVisible(true)}
                className="w-[25%] text-left border border-gray-300 rounded-lg p-2 bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {recurrence?.startDate?.toDateString() || "Select start date"}
            </button>

            {isCalendarVisible && (
                <div
                    className="absolute z-10 mt-2 border border-gray-300 bg-white rounded shadow-lg w-[25%] px-5 py-3 rounded-lg"
                >
                    <div className="flex justify-between items-center">
                        <HeadingDate />
                        <MonthDirection />
                    </div>
                    <ActiveSelection />
                    <RecurrenceOptions />
                    <ButtonContainer />
                </div>
            )}
        </div>
    );
};

export default CustomDatePicker;
