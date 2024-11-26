import React from 'react'
import { useDatePicker } from '../hooks/useDatePicker'
import { DIRECTION } from '../utils/constant'

const MonthDirection = () => {
    const { handleMonthChange } = useDatePicker()
    return (
        <div className="flex justify-between">
            <button className="text-2xl text-gray-600 hover:text-black px-3 py-1  transition hover:font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
                onClick={() => { handleMonthChange(DIRECTION.PREV) }}
            >
                &lt;
            </button>
            <button className="text-2xl text-gray-600 hover:text-black px-3 py-1  transition hover:font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
                onClick={() => { handleMonthChange(DIRECTION.NEXT) }}
            >
                &gt;
            </button>
        </div>
    )
}

export default MonthDirection