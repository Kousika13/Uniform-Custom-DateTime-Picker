import connectField   from 'uniforms/connectField';
import React          from 'react';
import { DatePicker }   from 'antd';

const { RangePicker } = DatePicker;


const DateRange = ({onChange, value: { start, stop }}) => (
   <RangePicker value={[start, stop]} onChange={dates => onChange({start:dates[0], stop: dates[1]})} />
);


export default connectField(DateRange);