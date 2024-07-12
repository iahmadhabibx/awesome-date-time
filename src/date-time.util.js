export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  export const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  export const parseDate = (dateString, hasWeekDay = true, hasTime = true) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    if (hasWeekDay) options.weekday = "short";
    if (hasTime) {
      options.hour = "numeric";
      options.minute = "numeric";
      options.hour12 = true;
    }
  
    const readableDateTime = date.toLocaleString("en-US", options);
    return readableDateTime;
  };
  
  export const getDatesFromMonthStartToEndOfMonth = (year, month) => {
    const currentDate = new Date();
    const today = currentDate.getDate();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1);
  
    const startDayOfWeek = firstDay.getDay();
    const daysMap = new Map();
  
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const placeholderDate = new Date(year, month, 0 - i);
      const dayOfWeek = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(placeholderDate);
  
      if (!daysMap.has(dayOfWeek)) {
        daysMap.set(dayOfWeek, { key: dayOfWeek, dates: [] });
      }
  
      daysMap.get(dayOfWeek).dates.push({ date: 0, isDisabled: true });
    }
  
    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(date);
  
      const isDisabled =
        date.setHours(0, 0, 0, 0) < currentDate.setHours(0, 0, 0, 0) &&
        day !== today;
  
      if (!daysMap.has(dayOfWeek)) {
        daysMap.set(dayOfWeek, { key: dayOfWeek, dates: [] });
      }
  
      daysMap.get(dayOfWeek).dates.push({ date: date.getDate(), isDisabled });
    }
  
    return Array.from(daysMap.values());
  };
  
  export const generateTimeSlots = (difference) => {
    const timeSlots = [];
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
  
    for (let i = 0; i < (24 * 60) / difference; i++) {
      const currentTime = new Date(
        startDate.getTime() + i * difference * 60 * 1000
      );
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";
  
      const formattedHours = (hours % 12 === 0 ? 12 : hours % 12)
        .toString()
        .padStart(2, "0");
      const formattedMinutes = minutes.toString().padStart(2, "0");
  
      const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  
      timeSlots.push(formattedTime);
    }
  
    return timeSlots;
  };
  
  export const generateTimeSlotsFrom9to6 = (difference) => {
    const timeSlots = [];
    const startDate = new Date();
    startDate.setHours(9, 0, 0, 0);
    const endDate = new Date();
    endDate.setHours(18, 0, 0, 0);
  
    let currentTime = startDate;
  
    while (currentTime <= endDate) {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";
  
      const formattedHours = (hours % 12 === 0 ? 12 : hours % 12)
        .toString()
        .padStart(2, "0");
      const formattedMinutes = minutes.toString().padStart(2, "0");
  
      const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  
      timeSlots.push(formattedTime);
  
      currentTime = new Date(currentTime.getTime() + difference * 60 * 1000);
    }
  
    return timeSlots;
  };
  
  export const formatDateString = (dateString) => {
    const date = new Date(dateString.replace(" at ", " "));
  
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
  
    const dayOfWeek = days[date.getDay()];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
  
    let hours = date.getHours();
    const period = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
  
    const formattedDate = `${dayOfWeek}, ${day}/${month} ${hours}${period}`;
  
    return formattedDate;
  };
  