
import React from 'react';
import connectField from 'uniforms/connectField';
import { TimePicker } from 'antd';
import moment from 'moment';
import filterDOMProps from 'uniforms/filterDOMProps';


const transformValues = (start, stop, onChange) => {
  onChange(transformDate(start, stop, 'date'));
}

const transformDate = (start, stop, selector) => {
  if (selector === "date") {
    return {
      start: start && start instanceof moment ? start.toDate() : start,
      stop: stop && stop instanceof moment ? stop.toDate() : stop
    };
  }

  if (selector === "moment") {
    return start ? moment(start) : start;
  }
}; 

const TimeRange = ({ onChange, value:{start, stop}, ...props }) => (
<section>
  <TimePicker {...filterDOMProps(props)} name="start" label="start" value={transformDate(start, null, 'moment')} onChange={start => transformValues(start, stop, onChange)} />
  <TimePicker {...filterDOMProps(props)} name="stop" label="stop" value={transformDate(stop, null, 'moment')} onChange={stop => transformValues(start, stop, onChange)} />
</section>
);


export default  connectField(TimeRange);

