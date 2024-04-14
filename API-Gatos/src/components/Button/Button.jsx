import "./Button.css"
import React from "react";

export function Button({ title = "", Clicked }) {
    return (
        <div>
            <button className="buttonn" onClick={Clicked}>
                {title}
            </button>
        </div>
    );
}
