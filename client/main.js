import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { BaseForm } from "uniforms-antd";
import { message } from "antd";

import TimePickerWrapper from "./TimePickerWrapper/timePickerWrapper";
import DatePickerWrapper from "./DatePickerWrapper/datePickerWrapper";
export default class CustomPicker extends React.Component {
  render() {
    return (
      <div>
        <h2>Uniform Custom Field</h2>
        <div className="custom-field-container">
          <DatePickerWrapper />
          <TimePickerWrapper />
        </div>
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<CustomPicker />, document.getElementById("app"));
});
