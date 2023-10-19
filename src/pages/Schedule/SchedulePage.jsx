import React from "react";
import ScheduleForm from "./ScheduleForm";
import ScheduleList from "./ScheduleList";

const SchedulePage = () => {
  return (
    <>
      <div className="content-wrapper">
        <ScheduleForm />
        <ScheduleList />
      </div>
    </>
  );
};

export default SchedulePage;
