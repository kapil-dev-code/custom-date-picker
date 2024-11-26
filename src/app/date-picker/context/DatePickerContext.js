"use client"
import { createContext, useState } from 'react';
import { ACTIVE_SECTION } from '../utils/constant';
export const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState(null);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(recurrence?.startDate || new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate?.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate?.getFullYear());
  const [yearRangeStart, setYearRangeStart] = useState(currentYear);
  const [activeSection, setActiveSection] = useState(ACTIVE_SECTION.CALENDAR)

  const resetState = () => {
    setSelectedDate(recurrence?.startDate || new Date());
    setCurrentMonth(recurrence?.startDate?.getMonth() || new Date().getMonth());
    setCurrentYear(recurrence?.startDate?.getFullYear() || new Date().getFullYear());
    setYearRangeStart(recurrence?.startDate?.getFullYear() || new Date().getFullYear());
    setActiveSection(ACTIVE_SECTION.CALENDAR);
  };

  const handleCalendarVisibility = (visible) => {
    setCalendarVisible(visible);
    if (visible) {
      resetState();
    }
  };
  return (
    <DatePickerContext.Provider
      value={{
        recurrence,
        setRecurrence,
        activeSection,
        setActiveSection,
        isCalendarVisible,
        setCalendarVisible:handleCalendarVisibility,
        selectedDate,
        setSelectedDate,
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
        yearRangeStart,
        setYearRangeStart
      }}>
      {children}
    </DatePickerContext.Provider>
  );
};
