
import React from 'react';
import connectField from 'uniforms/connectField';
import { TimePicker } from 'antd';

const TimeRange = ({ onChange, value:{start, stop} }) => (
<section>
  <TimePicker name="start" label="start" value={start} onChange={start => onChange({ start, stop })} />
  <TimePicker name="stop" label="end" value={stop} onChange={stop => onChange({ start, stop })} />
</section>
);


export default  connectField(TimeRange);

