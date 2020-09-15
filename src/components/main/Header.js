import React, { useState } from "react";

const Header = props => {
    const {
        generateNewArray,
        linearSearch,
        jumpSearch,
        exponentialSearch,
        binarySearch,
        range,
        target,
        isRunning,
        handleChange,
        setTarget
    } = props;

    const [algo, setAlgo] = useState(null)
    
    return (
        <div className="buttons">
            <button className="btn" disabled={isRunning} onClick={generateNewArray}>Generate Sorted Array</button>
            <input
                disabled={isRunning}
                className="slider"
                type="range"
                value={range}
                min="5"
                max="100"
                onChange={handleChange}
            />
            <div>
                <input
                    disabled={isRunning}
                    type="number"
                    placeholder="Value to Search"
                    className="form-control"
                    value={target}
                    onChange={(event) => setTarget(event.target.value)}
                />
            </div>

            <button
                className="btn"
                disabled={isRunning || !target}
                onClick={linearSearch}
            >
                Linear Search
            </button>
            <button
                className="btn"
                disabled={isRunning || !target}
                onClick={binarySearch}
            >
                Binary Search
            </button>
            <button
                className="btn"
                disabled={isRunning || !target}
                onClick={jumpSearch}>
                Jump  Search
            </button>
            <button
                className="btn"
                disabled={isRunning || !target}
                onClick={exponentialSearch}
            >
                Exponential Search
            </button>

        </div>
    )
}
export default Header;