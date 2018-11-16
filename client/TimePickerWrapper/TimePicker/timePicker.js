import React        from 'react';
import connectField from 'uniforms/connectField';
import { TimePicker, Button } from 'antd';
import moment from 'moment';
const TimeRange = ({onChange, value: {start, end}, isOpenStart, isOpenEnd, handleOpenChange, handleClose}) =>
    <section>
        <TimePicker open={isOpenStart} value={start} onChange={start => onChange({start, end})} onOpenChange={() => handleOpenChange()} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        <TimePicker open={isOpenEnd} value={end}  onChange={end  => onChange({start, end})} onOpenChange={() => handleOpenChange()} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} 
         addon={() => (
            <Button size="small" type="primary" onClick={() => handleClose()}>
              OK
            </Button>
          )}
          />
    </section>;

export default connectField(TimeRange);