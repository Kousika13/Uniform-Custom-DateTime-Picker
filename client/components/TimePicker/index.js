
import React from 'react';
import connectField from 'uniforms/connectField';
import { TimePicker } from 'antd';
import moment from 'moment';
import filterDOMProps from 'uniforms/filterDOMProps';


const transformValues = (startDate, stopDate, onChange) => {
  onChange({ start: transformDate(startDate, 'date'), stop: transformDate(stopDate, 'date')} );
}

const transformDate = (date, selector) => {
  if(selector === 'date')  {
     if(date && date instanceof moment) {
        return date.toDate();
     }
     return date;
  }

  if(selector === 'moment') {
      return date ? moment(date) : date;
  }
  return date;
} 

const TimeRange = ({ onChange, value:{start, stop}, ...props }) => (
<section>
  <TimePicker {...filterDOMProps(props)} name="start" label="start" value={transformDate(start, 'moment')} onChange={start => transformValues(start, stop, onChange)} />
  <TimePicker {...filterDOMProps(props)} name="stop" label="stop" value={transformDate(stop, 'moment')} onChange={stop => transformValues(start, stop, onChange)} />
</section>
);


export default  connectField(TimeRange);

