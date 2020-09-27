import React from "react";

function Status(props) {
    const {
        isRunning,
        target,
        results
    } = props;
    return (
        <div className="status">
            {results.map((result, index) => {
                return (
                    <div className="result" key={index}>
                        {result[1] > -1 ?
                            <h6><b>{result[0]}</b> is at index <b>{result[1]}.</b></h6>
                            : <h6><b>{result[0]}</b> was not found.</h6>}
                    </div>
                )
            })}
            {isRunning && <div className="">Searching for {target}</div>}
        </div>
    )
};
export default Status;