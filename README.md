# Awesome Date-Time

Welcome to the documentation for **Awesome Date-Time**, a versatile and easy-to-use date-time picker component for React applications.

## Installation

To install the package, use npm or yarn:

```sh
npm install awesome-date-time
```

or

```sh
yarn add awesome-date-time
```

## Usage

Below is an example of how to use the `DateTimePicker` component in your React application.

### Step 1: Import the Component

First, import the `DateTimePicker` component and the necessary CSS file:

```jsx
import React, { useState } from "react";
import DateTimePicker from "awesome-date-time";
```

### Step 2: Use the Component in Your Application

Here's a basic example of how to use the `DateTimePicker` component:

```jsx
const App = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleDateTimeChange = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  return (
    <div>
      <button onClick={() => setShowPicker(true)}>Select Date & Time</button>
      {showPicker && (
        <DateTimePicker
          show={showPicker}
          setShow={setShowPicker}
          selected={selectedDateTime}
          onChange={handleDateTimeChange}
        />
      )}
      <div>Selected Date-Time: {selectedDateTime}</div>
    </div>
  );
};

export default App;
```

### Step 3: Customize the Component

You can customize the `DateTimePicker` component by passing various props:

- `show` (bool, required): Determines whether the picker is visible.
- `hidePastDates` (bool, optional, default: false): If true, past dates are hidden.
- `timeSlotGap` (number, optional, default: 15): The gap between time slots in minutes.
- `bgColor` (string, optional, default: 'white'): Background color of the picker.
- `fontSize` (string, optional, default: '1.15rem'): Font size for dates & time slots.
- `selected` (string, required): The currently selected date-time.
- `setShow` (func, required): Function to control the visibility of the picker.
- `onChange` (func, required): Function to handle date-time selection changes.

Here's an example with custom props:

```jsx
<DateTimePicker
  show={showPicker}
  setShow={setShowPicker}
  selected={selectedDateTime}
  onChange={handleDateTimeChange}
  hidePastDates={true}
  timeSlotGap={30}
  bgColor="lightblue"
  fontSize="16px"
/>
```

## Component Details

### `DateTimePicker` Component

The `DateTimePicker` component allows users to select a date and time within a specified range. It provides an intuitive interface for navigating through months and selecting time slots.

#### Props

| Prop            | Type   | Required | Default | Description                                           |
| --------------- | ------ | -------- | ------- | ----------------------------------------------------- |
| `show`          | bool   | yes      | -       | Controls the visibility of the picker.                |
| `hidePastDates` | bool   | no       | false   | If true, past dates are hidden.                       |
| `timeSlotGap`   | number | no       | 15      | The gap between time slots in minutes.                |
| `bgColor`       | string | no       | white   | Background color of the picker.                       |
| `fontSize`      | string | no       | 1.15rem | Font size for dates & time slots.                     |
| `selected`      | string | yes      | -       | The currently selected date-time.                     |
| `setShow`       | func   | yes      | -       | Function to control the visibility of the picker.     |
| `onChange`      | func   | yes      | -       | Function to handle changes in the selected date-time. |



Refer here for [Live Demo](https://stackblitz.com/edit/vitejs-vite-klyjfa?file=index.html,src%2Findex.css,src%2FApp.jsx,package.json&terminal=dev).

```

## Conclusion

The `awesome-date-time` package is a powerful and customizable date-time picker component for React applications. It offers a user-friendly interface and a variety of customization options to suit your needs.

For more information and detailed examples, please refer to the [GitHub repository](https://github.com/iahmadhabibx/awesome-date-time). If you encounter any issues or have questions, feel free to open an issue on GitHub.
```
