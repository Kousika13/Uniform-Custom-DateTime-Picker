import connectField   from 'uniforms/connectField';
import React          from 'react';
import { DatePicker }   from 'antd';
import filterDOMProps from 'uniforms/filterDOMProps';
import moment from 'moment';

const { RangePicker } = DatePicker;

const transformValues = (startDate, stopDate, onChange) => {
    onChange({ start: transformDate(startDate, 'date'), stop: transformDate(stopDate, 'date')} );
}

const transformDate = (date, selector) => {
    if(selector === 'date')  {
        return date ? date.toDate() : date;
    }

    if(selector === 'moment') {
        return date ? moment(date) : date;
    }

    return date;
}

const DateRange = ({onChange, value: { start, stop }, ...props }) => (
   <RangePicker {...filterDOMProps(props)} value={[transformDate(start, 'moment'), transformDate(stop, 'moment')]} onChange={dates => transformValues(dates[0], dates[1], onChange)} />
);


export default connectField(DateRange);