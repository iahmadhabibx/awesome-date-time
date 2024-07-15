"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./index.css");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fi = require("react-icons/fi");
var _im = require("react-icons/im");
var _dateTime = require("./date-time.util");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DateTimePicker = function DateTimePicker(props) {
  var show = props.show,
    _props$hidePastDates = props.hidePastDates,
    hidePastDates = _props$hidePastDates === void 0 ? false : _props$hidePastDates,
    _props$timeSlotGap = props.timeSlotGap,
    timeSlotGap = _props$timeSlotGap === void 0 ? 15 : _props$timeSlotGap,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === void 0 ? "1.15rem" : _props$fontSize,
    _props$bgColor = props.bgColor,
    bgColor = _props$bgColor === void 0 ? "white" : _props$bgColor,
    selected = props.selected,
    setShow = props.setShow,
    onChange = props.onChange;
  var date = new Date();
  var containerRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)((0, _dateTime.getDatesFromMonthStartToEndOfMonth)(date.getFullYear(), date.getMonth())),
    _useState2 = _slicedToArray(_useState, 2),
    dates = _useState2[0],
    setDates = _useState2[1];
  var _useState3 = (0, _react.useState)((0, _dateTime.generateTimeSlotsFrom9to6)(timeSlotGap)),
    _useState4 = _slicedToArray(_useState3, 1),
    timeslots = _useState4[0];
  var _useState5 = (0, _react.useState)(date.getMonth()),
    _useState6 = _slicedToArray(_useState5, 2),
    currentMonth = _useState6[0],
    setCurrentMonth = _useState6[1];
  var _useState7 = (0, _react.useState)(date.getFullYear()),
    _useState8 = _slicedToArray(_useState7, 2),
    currentYear = _useState8[0],
    setCurrentYear = _useState8[1];
  var _useState9 = (0, _react.useState)({
      time: "",
      date: "",
      day: "",
      month: "",
      year: ""
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    dateTime = _useState10[0],
    setDateTime = _useState10[1];
  (0, _react.useEffect)(function () {
    if (selected) {
      var _selected$split = selected.split(" at "),
        _selected$split2 = _slicedToArray(_selected$split, 2),
        longDate = _selected$split2[0],
        timeslot = _selected$split2[1];
      var _longDate$split = longDate.split(", "),
        _longDate$split2 = _slicedToArray(_longDate$split, 2),
        day = _longDate$split2[0],
        shortDate = _longDate$split2[1];
      var _shortDate$split = shortDate.split(" "),
        _shortDate$split2 = _slicedToArray(_shortDate$split, 3),
        dayNumber = _shortDate$split2[0],
        month = _shortDate$split2[1],
        year = _shortDate$split2[2];
      var longDay = _dateTime.Days.find(function (d) {
        return d.substring(0, 3) === day;
      }) || "";
      var longMonth = _dateTime.Months.find(function (d) {
        return d.substring(0, 3) === month;
      }) || "";
      setDateTime({
        time: timeslot,
        date: dayNumber,
        day: longDay,
        month: longMonth,
        year: year
      });
    }
  }, [selected]);
  (0, _react.useEffect)(function () {
    if (dateTime.time && dateTime.date && dateTime.day && dateTime.month && dateTime.year) {
      onChange("".concat(dateTime.day.substring(0, 3), ", ").concat(dateTime.date, " ").concat(dateTime.month.substring(0, 3), " ").concat(dateTime.year, " at ").concat(dateTime.time));
    }
  }, [dateTime, onChange]);
  var renderDatesListing = function renderDatesListing(day) {
    var matchedDates = dates.find(function (d) {
      return d.key.toLocaleLowerCase() === day.toLocaleLowerCase();
    });
    return _react["default"].Children.toArray(matchedDates === null || matchedDates === void 0 ? void 0 : matchedDates.dates.map(function (dt) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          setDateTime(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              date: String(dt.date),
              day: String(matchedDates.key),
              month: String(_dateTime.Months[currentMonth]),
              year: String(currentYear)
            });
          });
        },
        style: {
          fontSize: fontSize
        },
        className: "date ".concat(dt.isDisabled ? "disabled" : "", " ").concat(dateTime.date === String(dt.date) && matchedDates.key.toLocaleLowerCase() === dateTime.day.toLocaleLowerCase() && _dateTime.Months[currentMonth] === dateTime.month && String(currentYear) === String(dateTime.year) && "selected")
      }, dt.date > 0 ? dt.isDisabled && hidePastDates ? "" : dt.date : "");
    }));
  };
  return show && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: bgColor
    },
    className: "date-time-picker",
    ref: containerRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "actions"
  }, /*#__PURE__*/_react["default"].createElement(_im.ImCancelCircle, {
    style: {
      width: "26px",
      height: "26px"
    },
    className: "cursor-pointer",
    onClick: function onClick() {
      return setShow(false);
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-lg"
  }, _dateTime.Months[currentMonth], " - ", currentYear)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "actions"
  }, /*#__PURE__*/_react["default"].createElement(_fi.FiArrowLeft, {
    style: {
      width: "26px",
      height: "26px"
    },
    onClick: function onClick() {
      if (currentMonth > 0) {
        setCurrentMonth(currentMonth - 1);
        setDates((0, _dateTime.getDatesFromMonthStartToEndOfMonth)(currentYear, currentMonth - 1));
      } else {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
        setDates((0, _dateTime.getDatesFromMonthStartToEndOfMonth)(currentYear - 1, 11));
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_fi.FiArrowRight, {
    style: {
      width: "26px",
      height: "26px"
    },
    onClick: function onClick() {
      if (currentMonth < 11) {
        setCurrentMonth(currentMonth + 1);
        setDates((0, _dateTime.getDatesFromMonthStartToEndOfMonth)(currentYear, currentMonth + 1));
      } else {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
        setDates((0, _dateTime.getDatesFromMonthStartToEndOfMonth)(currentYear + 1, 0));
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dates"
  }, _react["default"].Children.toArray(_dateTime.Days.map(function (day) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "day"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "p-4"
    }, day.substring(0, 1)), renderDatesListing(day));
  }))), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "time-slots"
  }, _react["default"].Children.toArray(timeslots.map(function (time) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: fontSize
      },
      className: "time-slot ".concat(dateTime.time === time && "selected"),
      onClick: function onClick() {
        setDateTime(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            time: time
          });
        });
      }
    }, time);
  }))));
};
DateTimePicker.propTypes = {
  show: _propTypes["default"].bool.isRequired,
  hidePastDates: _propTypes["default"].bool,
  timeSlotGap: _propTypes["default"].number,
  fontSize: _propTypes["default"].string,
  bgColor: _propTypes["default"].string,
  selected: _propTypes["default"].string.isRequired,
  setShow: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = DateTimePicker;