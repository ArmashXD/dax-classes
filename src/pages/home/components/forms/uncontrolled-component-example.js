
import React, { useRef } from 'react';

function UncontrolledInput() {
    const initialValue = 'Hello, World!';
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.select();
        alert(`${inputRef.current.value}`)
    };

    return (
        <div>
            {/* Using defaultValue for pre-filled data */}
            <input type="text" ref={inputRef} defaultValue={initialValue} />
            <button onClick={handleFocus}>Select Text</button>
        </div>
    );
}

export default UncontrolledInput;