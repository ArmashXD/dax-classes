import React from 'react';

const MouseTracker = ({ title, description, setNumber }) => {
    return <div >
        <div>{title}</div>
        <div>{description}</div>

        <div>
            <button onClick={() => setNumber((prevState) => prevState + 1)}>Increment </button>
        </div>
    </div>;
};

export default MouseTracker;
