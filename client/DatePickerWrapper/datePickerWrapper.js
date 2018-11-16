import React from "react";
import { render } from "react-dom";
import { BaseForm } from "uniforms-antd";
import Range from "./DatePicker/datePicker";
import { SimpleSchema } from "meteor/aldeed:simple-schema";
import moment from 'moment';
export default class DatePickerWrapper extends React.Component {
  state = {
    dateRange: {}
  };

  render() {
    return (
      <div>  
        <h3>Date Picker</h3>  
        <div className="value-container">Value: {JSON.stringify(this.state.dateRange)}</div>
        <BaseForm schema={datePickerSchema}>
          <Range
            name="value"
            onChange={range => this.setState({dateRange: range})}
          />
        </BaseForm>
        <div className="value-container">Start: {moment(this.state.dateRange.start).format('MMMM Do YYYY')}</div>
        <div className="value-container">End: {moment(this.state.dateRange.end).format('MMMM Do YYYY')}</div>
      </div>
    );
  }
}

const datePickerSchema = new SimpleSchema({
  value: {
    type: new SimpleSchema({
      start: {
        type: Date
      },
      end: {
        type: Date
      }
    })
  }
});
