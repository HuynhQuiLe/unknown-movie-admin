import React from "react";
import CTA from "./CTA";
import QuickCompareIncome from "./QuickCompareIncome";
import TransactionHistory from "./TransactionHistory";
import OpenProjects from "./OpenProjects";
import RevenueAndIncome from "./RevenueAndIncome";
import Messages from "./Messages";
import PortfolioSlide from "./PortfolioSlide";
import ToDoList from "./ToDoList";

const Dashboard = () => {
  return (
    <>
      <div className="content-wrapper">
        <CTA />
        <QuickCompareIncome />
        <div className="row">
          <TransactionHistory />
          <OpenProjects />
        </div>
        <RevenueAndIncome />
        <div className="row">
          <Messages />
          <PortfolioSlide />
          <ToDoList />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
