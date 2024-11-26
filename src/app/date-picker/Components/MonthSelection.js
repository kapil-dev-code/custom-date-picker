import React from 'react'
import { useDatePicker } from '../hooks/useDatePicker';
import { MONTHS_NAMES } from '../utils/constant';

const MonthSelection = () => {
    const { handleMonthSelection, currentMonth } = useDatePicker()
    return (
        <div className="grid grid-cols-3 gap-2">
            {MONTHS_NAMES.map((month, idx) => (
                <div
                    key={'mont_container' + month + idx}
                    className={`font-semibold text-gray-600 rounded-2xl p-2  cursor-pointer text-center font-sans ${currentMonth === idx ? 'bg-blue-500 text-white  shadow-lg shadow-blue-500/50 brightness-125' : 'transition  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 hover:text-white duration-200'}`}
                    onClick={() => handleMonthSelection(idx)}
                >
                    {month}
                </div>
            ))}
        </div>
    );
};

export default MonthSelection