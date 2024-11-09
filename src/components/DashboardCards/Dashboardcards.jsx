import React from "react";
import "./DashboardCards.css";
import { FaBox, FaDollarSign, FaTag, FaShoppingBag } from "react-icons/fa";

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      <div className="card">
        <div className="card-content">
          <div className="card-title">ORDERS</div>
          <div className="card-value">1,587</div>
          <div className="card-footer">
            <span className="badge positive">+11%</span> From previous period
          </div>
        </div>
        <div className="card-icon">
          <FaBox size={30} />
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-title">REVENUE</div>
          <div className="card-value">$46,782</div>
          <div className="card-footer">
            <span className="badge negative">-29%</span> From previous period
          </div>
        </div>
        <div className="card-icon">
          <FaDollarSign size={30} />
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-title">AVERAGE PRICE</div>
          <div className="card-value">$15.9</div>
          <div className="card-footer">
            <span className="badge neutral">0%</span> From previous period
          </div>
        </div>
        <div className="card-icon">
          <FaTag size={30} />
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-title">PRODUCT SOLD</div>
          <div className="card-value">1,890</div>
          <div className="card-footer">
            <span className="badge positive">+89%</span> From previous period
          </div>
        </div>
        <div className="card-icon">
          <FaShoppingBag size={30} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
