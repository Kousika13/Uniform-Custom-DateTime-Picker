import React from "react";
import { render } from "react-dom";
import { AutoForm, BaseForm } from "uniforms-antd";
import {message} from 'antd';
import TimeRange from "./TimePicker/timePicker";
import { SimpleSchema } from "meteor/aldeed:simple-schema";
import moment from 'moment';

export default class TimePickerWrapper extends React.Component {
  state = {
    timeRange: {},
    isOpenStart: false,
    isOpenEnd: false
  };

  onChangeTimeRange = timeRange => {
    let value = {
      start: this.state.timeRange.start,
      end : this.state.timeRange.end
    }
    timeRange.start ? value.start = timeRange.start : '';
    timeRange.end ? value.end = timeRange.end : '';
    this.setState(() => ({  timeRange: value }));
  };

  handleOpenChange = () => {
      this.setState(() => ({  isOpenStart: true }));
      this.setState(() => ({  isOpenEnd: true }));
  };

  close = () => {
    if (this.state.timeRange.start > this.state.timeRange.end) {
      message.config({ duration: 2, maxCount: 3 });
      message.error('End time should be greater than the start time !');
    } else {
      this.setState(() => ({  isOpenStart: false }));
      this.setState(() => ({  isOpenEnd: false }));
    }
  }

  render() {
    return (
      <div>
        <h3>Time Picker</h3> 
        <div className="value-container">Value: {JSON.stringify(this.state.timeRange)}</div>
        <BaseForm schema={timePickerSchema}>
          <TimeRange
            handleOpenChange={this.handleOpenChange}
            name="value"
            isOpenStart={this.state.isOpenStart}
            isOpenEnd={this.state.isOpenEnd}
            handleClose={() => this.close()}
            value={this.state.timeRange}
            onChange={timeRange => this.onChangeTimeRange(timeRange)}
          />
        </BaseForm>
        <div className="value-container">Start: {moment(this.state.timeRange.start).format('h:mm:ss a')}</div>
        <div className="value-container">End: {moment(this.state.timeRange.end).format('h:mm:ss a')}</div>
      </div>
    );
  }
}


export const timePickerSchema = new SimpleSchema({
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