import React from "react";
import DashboardCards from "../components/DashboardCards/Dashboardcards";
import Heading from "../components/Heading/Heading";
import TransactionsOrders from "../components/TransactionsOrders/TransactionsOrders";

const Dashboard = () => {
  return (
    <div>
      <Heading
        title="Dashboard"
        subtitle="AmanStop >
Dashboard >
Dashboard"
      />
      <DashboardCards />
      <TransactionsOrders />
    </div>
  );
};

export default Dashboard;
