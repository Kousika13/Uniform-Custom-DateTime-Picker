import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";
import AutoForm from "uniforms-antd/AutoForm";
import { ErrorsField, SubmitField } from "uniforms-antd";
import DateRange from "./components/DatePicker";
import TimeRange from "./components/TimePicker";
import schema from "./lib/schema";
import { ListField, ListItemField } from 'uniforms-antd';

class App extends Component {
  onChange = (...args) => {
    console.log("model onchange", ...args);
  };

  transformModel = (mode, model) => {
    // as antd returns and accepts moment object, transform the model before storing/validating in the model.

    if (mode === "validate" || mode === "submit") {
      const { dateRange, timeRange } = model;
      let newModel = {};
      newModel.dateRange = {};
      newModel.timeRange = {};
      // clone the object to prevent mutation
      newModel.dateRange.start = dateRange.start;
      newModel.dateRange.stop = dateRange.stop;
      newModel.timeRange.start = timeRange.start;
      newModel.timeRange.stop = timeRange.stop;


      // convert moment to date object if the field value is not undefined.
      newModel.dateRange.start = newModel.dateRange.start
        ? newModel.dateRange.start.toDate()
        : newModel.dateRange.start;
      newModel.dateRange.stop = newModel.dateRange.stop
        ? newModel.dateRange.stop.toDate()
        : newModel.dateRange.stop;
      newModel.timeRange.start = newModel.timeRange.start
        ? newModel.timeRange.start.toDate()
        : newModel.timeRange.start;
      newModel.timeRange.stop = newModel.timeRange.stop
        ? newModel.timeRange.stop.toDate()
        : newModel.timeRange.stop;
      return newModel;
    }
    // return the unaltered model in other scenarios.
    return model;
  };

  render() {
    const { transformModel, onChange } = this;
    return (
      <div className="container">
        <h3>Uniform custom field form</h3>
        <AutoForm
          label={false}
          schema={schema}
          onChange={onChange}
          spacing={3}
          modelTransform={transformModel}
          onSubmit={model => console.log("onSubmit", model)}
        >
          <section className="error-section">
            <ErrorsField />
          </section>
          <h4>Time Picker</h4>
          <section className="section">
            <TimeRange name="timeRange" />
          </section>
          <h4>Date Picker</h4>
          <section className="section">
            <DateRange name="dateRange" />
          </section>
          <SubmitField />
        </AutoForm>
      </div>
    );
  }
}
export default App;

Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});
