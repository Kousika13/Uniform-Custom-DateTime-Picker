import React        from 'react';
import connectField from 'uniforms/connectField';
import { DatePicker } from 'antd';
const { RangePicker, MonthPicker } = DatePicker;

const Range = ({onChange, value: {start, stop}}) =>
    <section>
        <RangePicker onChange={range => onChange({start:range[0], end: range[1]})}/>
    </section>
;

export default connectField(Range);