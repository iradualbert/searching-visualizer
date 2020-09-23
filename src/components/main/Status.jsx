import React from "react";

function Status(props){
    const {
        isRunning,
        target,
        results
    } = props;
    return (
        <div className="status">
            {isRunning && <div className="">Searching for {target}</div>}
            {results.map(result => {
                return (
                    <div className="result">
                        {result[1] > -1 ?
                            <h6><b>{result[0]}</b> is at index <b>{result[1]}.</b></h6>
                            : <h6><b>{result[0]}</b> was not found.</h6>}
                    </div>
                )
            })}
        </div>
    )
};
export default Status;