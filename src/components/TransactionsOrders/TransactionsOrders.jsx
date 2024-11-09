import React from "react";
import "./TransactionsOrders.css";

const TransactionsOrders = () => {
  return (
    <div className="transactions-orders-container">
      <div className="latest-transactions">
        <h3>Latest Transactions</h3>
        <table>
          {/* <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead> */}
          <tbody>
            {transactionsData.map((transaction, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={transaction.image}
                    alt={transaction.name}
                    className="transaction-image"
                  />
                  {transaction.name}
                </td>
                <td>
                  <span
                    className={`transaction-status ${transaction.status.toLowerCase()}`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td>${transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>
                  <button className="edit-button">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="latest-orders">
        <h3>Latest Orders</h3>
        <table>
          {/* <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead> */}
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={order.image}
                    alt={order.product}
                    className="order-image"
                  />
                  {order.product}
                </td>
                <td>#{order.id}</td>
                <td>
                  <span
                    className={`order-status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>${order.amount}</td>
                <td>{order.date}</td>
                <td>
                  <button className="edit-button">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const transactionsData = [
  {
    name: "Herbert C. Patton",
    image: "https://via.placeholder.com/40",
    status: "Confirm",
    amount: "14,584",
    date: "5/12/2016",
  },
  {
    name: "Mathias N. Klausen",
    image: "https://via.placeholder.com/40",
    status: "Waiting payment",
    amount: "8,541",
    date: "10/11/2016",
  },
  {
    name: "Nikolaj S. Henriksen",
    image: "https://via.placeholder.com/40",
    status: "Confirm",
    amount: "954",
    date: "8/11/2016",
  },
  {
    name: "Lasse C. Overgaard",
    image: "https://via.placeholder.com/40",
    status: "Payment expired",
    amount: "44,584",
    date: "7/11/2016",
  },
  {
    name: "Kasper S. Jessen",
    image: "https://via.placeholder.com/40",
    status: "Confirm",
    amount: "8,844",
    date: "1/11/2016",
  },
];

const ordersData = [
  {
    id: "12354781",
    product: "Riverston Glass Chair",
    image: "https://via.placeholder.com/40",
    status: "Delivered",
    amount: "185",
    date: "5/12/2016",
  },
  {
    id: "52140300",
    product: "Shine Company Catalina",
    image: "https://via.placeholder.com/40",
    status: "Delivered",
    amount: "1,024",
    date: "5/12/2016",
  },
  {
    id: "96254137",
    product: "Trex Outdoor Furniture Cape",
    image: "https://via.placeholder.com/40",
    status: "Cancel",
    amount: "657",
    date: "5/12/2016",
  },
  {
    id: "12365474",
    product: "Oasis Bathroom Teak Corner",
    image: "https://via.placeholder.com/40",
    status: "Shipped",
    amount: "84",
    date: "5/12/2016",
  },
  {
    id: "85214796",
    product: "BeoPlay Speaker",
    image: "https://via.placeholder.com/40",
    status: "Delivered",
    amount: "58",
    date: "5/12/2016",
  },
];

export default TransactionsOrders;
