import connectField   from 'uniforms/connectField';
import React          from 'react';
import { DatePicker }   from 'antd';
import filterDOMProps from 'uniforms/filterDOMProps';
import moment from 'moment';

const { RangePicker } = DatePicker;

const transformValues = (start, stop, onChange) => {
  onChange(transformDate(start, stop, "date"));
};

const transformDate = (start, stop, selector) => {
  if (selector === "date") {
    return {
      start: start ? start.toDate() : start,
      stop: stop ? stop.toDate() : stop
    };
  } 
  if (selector === "moment") {
    return [start ? moment(start) : start, stop ? moment(stop) : stop];
  }
};

const DateRange = ({onChange, value: { start, stop }, ...props }) => (
   <RangePicker {...filterDOMProps(props)} value={transformDate(start, stop, 'moment')} onChange={dates => transformValues(dates[0], dates[1], onChange)} />
);

export default connectField(DateRange);