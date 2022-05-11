import React from "react";

let date = new Date();
let h = date.getHours(); // 0 - 23
let m = date.getMinutes(); // 0 - 59
let state = "AM";
function clock() {
if (h > 12) {
  h = h - 12;
  state = "PM";
}
if (h === 12) {
  state = "PM";
}
if (h === 0) {
  h = 12;
  state = "AM";
}
let t = parseInt(m/10);  
m = m%10;
return (
        <h1 className="clock-font">{h}:{t}{m}{state}</h1>
    );

}
export default clock;