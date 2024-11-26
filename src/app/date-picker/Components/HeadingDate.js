import React from 'react'
import { ACTIVE_SECTION, MONTHS_NAMES } from '../utils/constant'
import { useDatePicker } from '../hooks/useDatePicker'

const HeadingDate = () => {
    const { currentMonth, handleSectionClick, currentYear } = useDatePicker()
    return (
        <div className="text-lg font-semibold flex gap-4 flex-1">
            <span className="cursor-pointer  text-gray-600 hover:text-black  transition  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" onClick={() => handleSectionClick(ACTIVE_SECTION.MONTHS)}>
                {MONTHS_NAMES?.[currentMonth]
                    || ""}
            </span>
            <span className="cursor-pointer  text-gray-600 hover:text-black  transition  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110" onClick={() => handleSectionClick(ACTIVE_SECTION.YEARS)}>
                {currentYear || ""}
            </span>
        </div>
    )
}

export default HeadingDate