"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDate = exports.getDatesFromMonthStartToEndOfMonth = exports.generateTimeSlotsFrom9to6 = exports.generateTimeSlots = exports.formatDateString = exports.Months = exports.Days = void 0;
var Months = exports.Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Days = exports.Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var parseDate = exports.parseDate = function parseDate(dateString) {
  var hasWeekDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!dateString) return "";
  var date = new Date(dateString);
  var options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  if (hasWeekDay) options.weekday = "short";
  if (hasTime) {
    options.hour = "numeric";
    options.minute = "numeric";
    options.hour12 = true;
  }
  var readableDateTime = date.toLocaleString("en-US", options);
  return readableDateTime;
};
var getDatesFromMonthStartToEndOfMonth = exports.getDatesFromMonthStartToEndOfMonth = function getDatesFromMonthStartToEndOfMonth(year, month) {
  var currentDate = new Date();
  var today = currentDate.getDate();
  var lastDay = new Date(year, month + 1, 0).getDate();
  var firstDay = new Date(year, month, 1);
  var startDayOfWeek = firstDay.getDay();
  var daysMap = new Map();
  for (var i = startDayOfWeek - 1; i >= 0; i--) {
    var placeholderDate = new Date(year, month, 0 - i);
    var dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long"
    }).format(placeholderDate);
    if (!daysMap.has(dayOfWeek)) {
      daysMap.set(dayOfWeek, {
        key: dayOfWeek,
        dates: []
      });
    }
    daysMap.get(dayOfWeek).dates.push({
      date: 0,
      isDisabled: true
    });
  }
  for (var day = 1; day <= lastDay; day++) {
    var date = new Date(year, month, day);
    var _dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long"
    }).format(date);
    var isDisabled = date.setHours(0, 0, 0, 0) < currentDate.setHours(0, 0, 0, 0) && day !== today;
    if (!daysMap.has(_dayOfWeek)) {
      daysMap.set(_dayOfWeek, {
        key: _dayOfWeek,
        dates: []
      });
    }
    daysMap.get(_dayOfWeek).dates.push({
      date: date.getDate(),
      isDisabled: isDisabled
    });
  }
  return Array.from(daysMap.values());
};
var generateTimeSlots = exports.generateTimeSlots = function generateTimeSlots(difference) {
  var timeSlots = [];
  var startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  for (var i = 0; i < 24 * 60 / difference; i++) {
    var currentTime = new Date(startDate.getTime() + i * difference * 60 * 1000);
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var period = hours >= 12 ? "PM" : "AM";
    var formattedHours = (hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, "0");
    var formattedMinutes = minutes.toString().padStart(2, "0");
    var formattedTime = "".concat(formattedHours, ":").concat(formattedMinutes, " ").concat(period);
    timeSlots.push(formattedTime);
  }
  return timeSlots;
};
var generateTimeSlotsFrom9to6 = exports.generateTimeSlotsFrom9to6 = function generateTimeSlotsFrom9to6(difference) {
  var timeSlots = [];
  var startDate = new Date();
  startDate.setHours(9, 0, 0, 0);
  var endDate = new Date();
  endDate.setHours(18, 0, 0, 0);
  var currentTime = startDate;
  while (currentTime <= endDate) {
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var period = hours >= 12 ? "PM" : "AM";
    var formattedHours = (hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, "0");
    var formattedMinutes = minutes.toString().padStart(2, "0");
    var formattedTime = "".concat(formattedHours, ":").concat(formattedMinutes, " ").concat(period);
    timeSlots.push(formattedTime);
    currentTime = new Date(currentTime.getTime() + difference * 60 * 1000);
  }
  return timeSlots;
};
var formatDateString = exports.formatDateString = function formatDateString(dateString) {
  var date = new Date(dateString.replace(" at ", " "));
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  var dayOfWeek = days[date.getDay()];
  var day = String(date.getDate()).padStart(2, "0");
  var month = months[date.getMonth()];
  var hours = date.getHours();
  var period = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  var formattedDate = "".concat(dayOfWeek, ", ").concat(day, "/").concat(month, " ").concat(hours).concat(period);
  return formattedDate;
};