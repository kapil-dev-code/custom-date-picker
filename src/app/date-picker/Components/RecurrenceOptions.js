"use client";
import React from 'react';
import { RECURRENCE_PATTERNS } from '../utils/constant';
import { useDatePicker } from '../hooks/useDatePicker';

const RecurrenceOptions = () => {
    const { recurrence, setRecurrence, handlePatternChange } = useDatePicker();
    return (
        <div className="p-4">
            <label className="block mb-2">Recurrence Pattern</label>
            <select
                value={recurrence?.pattern || ""}
                onChange={handlePatternChange}
                className="border border-gray-300 rounded p-2 mb-4"
            >
                {!recurrence?.pattern ? <option value="" disabled>
                    Select a pattern
                </option> : null}
                {RECURRENCE_PATTERNS.map((pattern, idx) => (
                    <option key={"options" + pattern + idx} value={pattern}>
                        {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
                    </option>
                ))}
            </select>
        </div>

    );
};

export default RecurrenceOptions;
