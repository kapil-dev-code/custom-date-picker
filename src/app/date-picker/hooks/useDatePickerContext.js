import { useContext } from 'react';
import { DatePickerContext } from '../context/DatePickerContext';


export const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);

  if (!context) {
    throw new Error('useDatePicker must be used within a DatePickerProvider');
  }

  return context;
};