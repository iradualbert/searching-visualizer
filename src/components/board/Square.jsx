import React from "react";

const Square = (props) => {
    const {
        value,
        id,
        barWidth
    } = props;

    return (
        <div className="box box-value" id={id} style={{height: value * 5, width: barWidth}}>
          {value}
        </div>
    )

};

export default Square;