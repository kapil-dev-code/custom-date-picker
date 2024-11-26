import React from 'react'
import { useDatePicker } from '../hooks/useDatePicker';
import { DIRECTION } from '../utils/constant';

const YearSelection = () => {
    const { yearRangeStart, handleYearRangeChange, handleYearSelection,currentYear } = useDatePicker()
    const yearList = Array.from({ length: 10 }, (val, i) => yearRangeStart + i);
    return (
        <div className="p-2">
            {/* Year Navigation */}
            <div className="flex justify-between p-2 items-center">
                <button className="text-2xl text-gray-600 hover:text-black px-3 py-1  transition  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
                    onClick={() => { handleYearRangeChange(DIRECTION.PREV) }}
                >
                    &lt;
                </button>
                <span className="font-semibold text-gray-600 text-lg">
                    {yearRangeStart} - {yearRangeStart + yearList.length - 1}
                </span>
                <button className="text-2xl text-gray-600 hover:text-black px-3 py-1  transition  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
                    onClick={() => { handleYearRangeChange(DIRECTION.NEXT) }}
                >
                    &gt;
                </button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
                {yearList?.map((year, idx) => (
                    <div
                        key={"year_container" + year + idx}
                        className={`font-semibold text-gray-600 rounded-2xl p-2  cursor-pointer text-center font-sans ${currentYear === year ? 'bg-blue-500 text-white  shadow-lg shadow-blue-500/50 brightness-125' : 'transition  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 hover:text-white duration-200'}`}
                        onClick={() => handleYearSelection(year)}
                    >
                        {year}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default YearSelection