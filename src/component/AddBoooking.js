import React, { Component, useState } from "react";
import Select from "react-select";
import DatePicker from "react-dater";
import "react-dater/dist/index.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Addbooking() {
  const [dates, setDates] = useState({
    checkin: new Date("2022-02-10"),

    checkout: new Date("2022-02-28"),
  });
  const [open, setOpen] = useState(false);

  return (
    <div className="booking_main">
      <div className="content-area">
        <div className="inner-area">
          <div className="col-heading">
            <span className="text">City</span>
            <Select className="dropdown" options={options} />
          </div>

          <div className="col-heading">
            <span className="text">Check in</span>
            <div>
              <DatePicker
                dates={dates}
                setDates={setDates}
                open={open}
                setOpen={setOpen}
              >
                <button onClick={() => setOpen(!open)}>
                  {dates.checkin && dates.checkin.toDateString()} |{" "}
                  {dates.checkout && dates.checkout.toDateString()}
                </button>
              </DatePicker>{" "}
            </div>{" "}
          </div>

          <div className="col-heading">
            <span className="text">Check out</span>
            <div>
              <DatePicker
                dates={dates}
                setDates={setDates}
                open={open}
                setOpen={setOpen}
              >
                <button onClick={() => setOpen(!open)}>
                  {dates.checkin && dates.checkin.toDateString()} |{" "}
                  {dates.checkout && dates.checkout.toDateString()}
                </button>
              </DatePicker>{" "}
            </div>{" "}
          </div>

          <div className="col-heading">
            <div className="navLink">
              <a className="button">Search</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
