import React from "react";

const Square = (props) => {
    const {
        value,
        id
    } = props;

    return (
        <div className="box box-value" id={id}>
          {value}
        </div>
    )

};

export default Square;