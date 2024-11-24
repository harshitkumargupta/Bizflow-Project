// src/pages/DashboardPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>BizFlow</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <div className="welcome">
            <h1>Welcome Back, User!</h1>
            <p>Your business dashboard at a glance.</p>
          </div>

          <div className="user-profile">
            <img src="https://via.placeholder.com/80" alt="User Avatar" />
            <div className="profile-info">
              <h3>John Doe</h3>
              <p>Acme Corp.</p>
            </div>
          </div>
        </header>

        {/* Quick Links */}
        <section className="dashboard-actions">
          <div className="action-card">
            <h3>Manage Inventory</h3>
            <p>Track products, manage stock, and ensure availability.</p>
            <Link to="/inventory" className="btn">Go to Inventory</Link>
          </div>
          <div className="action-card">
            <h3>Transactions Overview</h3>
            <p>View and analyze recent business transactions.</p>
            <Link to="/transactions" className="btn">View Transactions</Link>
          </div>
          <div className="action-card">
            <h3>Data Insights</h3>
            <p>Leverage visualized data for business growth.</p>
            <Link to="/settings" className="btn">View Insights</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
