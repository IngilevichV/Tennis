import React from 'react';

  
export default function Footer() {

    return (
        <div style={{
            height: "50px",
            // backgroudColor:"red",
            width: "100%",
            position: "fixed",
            bottom: 0
        }}>
            <div className="text-center">
            <p>
                Tennis &copy; <span id="year">{new Date().getFullYear()}</span>
            </p>
            </div>
        </div>
    );
}