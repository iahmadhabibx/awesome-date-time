import "./index.css";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import {
  Days,
  Months,
  generateTimeSlotsFrom9to6,
  getDatesFromMonthStartToEndOfMonth,
} from "./date-time.util";

const DateTimePicker = (props) => {
  const {
    show,
    hidePastDates = false,
    timeSlotGap = 15,
    bgColor = "white",
    selected,
    setShow,
    onChange,
  } = props;
  const date = new Date();
  const containerRef = useRef(null);
  const [dates, setDates] = useState(
    getDatesFromMonthStartToEndOfMonth(date.getFullYear(), date.getMonth())
  );
  const [timeslots] = useState(generateTimeSlotsFrom9to6(timeSlotGap));
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [dateTime, setDateTime] = useState({
    time: "",
    date: "",
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    if (selected) {
      const [longDate, timeslot] = selected.split(" at ");
      const [day, shortDate] = longDate.split(", ");
      const [dayNumber, month, year] = shortDate.split(" ");
      const longDay = Days.find((d) => d.substring(0, 3) === day) || "";
      const longMonth = Months.find((d) => d.substring(0, 3) === month) || "";
      setDateTime({
        time: timeslot,
        date: dayNumber,
        day: longDay,
        month: longMonth,
        year: year,
      });
    }
  }, [selected]);

  useEffect(() => {
    if (
      dateTime.time &&
      dateTime.date &&
      dateTime.day &&
      dateTime.month &&
      dateTime.year
    ) {
      onChange(
        `${dateTime.day.substring(0, 3)}, ${
          dateTime.date
        } ${dateTime.month.substring(0, 3)} ${dateTime.year} at ${
          dateTime.time
        }`
      );
    }
  }, [dateTime, onChange]);

  const renderDatesListing = (day) => {
    const matchedDates = dates.find(
      (d) => d.key.toLocaleLowerCase() === day.toLocaleLowerCase()
    );

    return React.Children.toArray(
      matchedDates?.dates.map((dt) => (
        <div
          onClick={() => {
            setDateTime((prev) => {
              return {
                ...prev,
                date: String(dt.date),
                day: String(matchedDates.key),
                month: String(Months[currentMonth]),
                year: String(currentYear),
              };
            });
          }}
          className={`h-10 w-10 text-center transition-all rounded-md text-2xl pt-1.5 ${
            dateTime.date === String(dt.date) &&
            matchedDates.key.toLocaleLowerCase() ===
              dateTime.day.toLocaleLowerCase() &&
            Months[currentMonth] === dateTime.month &&
            String(currentYear) === String(dateTime.year) &&
            "bg-gray-400"
          } ${
            dt.isDisabled
              ? `pointer-events-none text-gray-500`
              : `cursor-pointer hover:bg-gray-400`
          }`}
        >
          {dt.date > 0 ? (dt.isDisabled && hidePastDates ? "" : dt.date) : ""}
        </div>
      ))
    );
  };

  return (
    show && (
      <div
        style={{ background: bgColor }}
        className="p-2 rounded-sm max-w-full absolute left-0 z-10"
        ref={containerRef}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4">
            <ImCancelCircle
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShow(false)}
            />
            <span className="text-lg">
              {Months[currentMonth]} - {currentYear}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiArrowLeft
              onClick={() => {
                if (currentMonth > 0) {
                  setCurrentMonth(currentMonth - 1);
                  setDates(
                    getDatesFromMonthStartToEndOfMonth(
                      currentYear,
                      currentMonth - 1
                    )
                  );
                } else {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                  setDates(
                    getDatesFromMonthStartToEndOfMonth(currentYear - 1, 11)
                  );
                }
              }}
              className="cursor-pointer h-12 w-12 p-2 rounded hover:bg-gray-200"
            />
            <FiArrowRight
              onClick={() => {
                if (currentMonth < 11) {
                  setCurrentMonth(currentMonth + 1);
                  setDates(
                    getDatesFromMonthStartToEndOfMonth(
                      currentYear,
                      currentMonth + 1
                    )
                  );
                } else {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                  setDates(
                    getDatesFromMonthStartToEndOfMonth(currentYear + 1, 0)
                  );
                }
              }}
              className="cursor-pointer h-12 w-12 p-2 rounded hover:bg-gray-200"
            />
          </div>
        </div>
        <hr />

        <div className="flex justify-between">
          {React.Children.toArray(
            Days.map((day) => (
              <div className="flex flex-col items-center">
                <span className="p-4">{day.substring(0, 1)}</span>
                {renderDatesListing(day)}
              </div>
            ))
          )}
        </div>
        <hr />
        <div className="flex flex-wrap max-h-52 overflow-y-auto gap-3">
          {React.Children.toArray(
            timeslots.map((time) => (
              <div
                className={`${
                  dateTime.time === time && "bg-gray-400"
                } cursor-pointer hover:bg-gray-200 p-2 rounded-md text-xl`}
                onClick={() => {
                  setDateTime((prev) => {
                    return {
                      ...prev,
                      time,
                    };
                  });
                }}
              >
                {time}
              </div>
            ))
          )}
        </div>
      </div>
    )
  );
};

DateTimePicker.propTypes = {
  show: PropTypes.bool.isRequired,
  hidePastDates: PropTypes.bool,
  timeSlotGap: PropTypes.number,
  selectedColor: PropTypes.string,
  selected: PropTypes.string.isRequired,
  setShow: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateTimePicker;
