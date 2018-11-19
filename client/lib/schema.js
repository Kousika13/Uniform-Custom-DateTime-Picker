
import { SimpleSchema } from "meteor/aldeed:simple-schema";
const schema = new SimpleSchema({
  dateRange: {
    type: Object
  },
  "dateRange.start": {
    type: Date
  },
  "dateRange.stop": {
    type: Date
  },
  timeRange: {
    type: Object
  },
  "timeRange.start": {
    type: Date,
    custom: function () {
      if (this.value > this.field('timeRange.stop').value) {
        return "startRangeError";
      }
    }
  },
  "timeRange.stop": {
    type: Date,
    custom: function () {
      if (this.value < this.field('timeRange.start').value) {
        return "stopRangeError";
      }
    }
  },
});

schema.messages({
  "startRangeError": "Start time should be less than stop time",
  "stopRangeError": "Stop time should be greater than start time"
});


export default schema;
