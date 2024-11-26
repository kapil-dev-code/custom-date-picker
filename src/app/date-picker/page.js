import React from 'react';
import { DatePickerProvider } from './context/DatePickerContext';
import DatePicker from './DatePicker';
const DatePickerPage = () => {
  return (
    <DatePickerProvider>
      <DatePicker />
    </DatePickerProvider>
  );
};

export default DatePickerPage;