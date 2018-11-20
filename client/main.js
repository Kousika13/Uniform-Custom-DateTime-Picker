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
