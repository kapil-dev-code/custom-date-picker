import React from 'react'
import { useDatePicker } from '../hooks/useDatePicker'
const ButtonContainer = () => {
    const {handleCancel,handleDone}=useDatePicker()
    return (
        <div className="flex justify-between p-2 mt-2 border-t border-gray-300">
            <button onClick={handleCancel} className="p-2 bg-red-500 text-white rounded">
                Cancel
            </button>
            <button onClick={handleDone} className="p-2 bg-green-500 text-white rounded">
                Done
            </button>
        </div>
    )
}

export default ButtonContainer