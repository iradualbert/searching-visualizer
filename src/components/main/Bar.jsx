import React from "react";

const Bar = (props) => {
    const {
        value,
        id,
        barWidth
    } = props;

    return (
        <div className="box box-value"
            id={id}
            style={
                {
                    height: value * 1.5,
                    width: barWidth,
                    fontSize: Math.min(barWidth / 2, 15)
                }
            }
        >
            {value}
        </div>
    )

};

export default Bar;