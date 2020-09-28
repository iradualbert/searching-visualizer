import React from "react";

const Header = props => {
    const {
        generateNewArray,
        linearSearch,
        jumpSearch,
        exponentialSearch,
        binarySearch,
        size,
        target,
        isRunning,
        handleChange,
        setTarget
    } = props;
    const searchDisabled = isRunning || !(target >= 0) || target === "";

    return (
        <div className="buttons bg-secondary">
            <button className="btn btn-primary" disabled={isRunning} onClick={generateNewArray}>Generate Sorted Array</button>
            <label htmlFor="size" style={{ marginTop: 8, color: "white" }}>Array Size</label>
            <input
                disabled={isRunning}
                name="size"
                className="slider"
                type="range"
                id="size"
                value={size}
                min="10"
                max="300"
                onChange={handleChange}
            />
            <div>
                <input
                    disabled={isRunning}
                    type="number"
                    min="0"
                    placeholder="Value to Search"
                    className="form-control"
                    value={target}
                    onChange={(event) => setTarget(event.target.value)}
                />
            </div>
            <button
                className="btn btn-dark"
                disabled={searchDisabled}
                onClick={linearSearch}
            >
                Linear Search
            </button>
            <button
                className="btn btn-dark"
                disabled={searchDisabled}
                onClick={binarySearch}
            >
                Binary Search
            </button>
            <button
                className="btn btn-dark"
                disabled={searchDisabled}
                onClick={jumpSearch}>
                Jump  Search
            </button>
            <button
                className="btn btn-dark"
                disabled={searchDisabled}
                onClick={exponentialSearch}
            >
                Exponential Search
            </button>
        </div>
    )
}
export default Header;