import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../../services/apiService';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'; // Example with recharts
import './Dashboard.css'
const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({
    mostViewed: [],
    mostLiked: []
  });

  useEffect(() => {
    const loadDashboardData = async () => {
      const response = await fetchDashboardData();
      setDashboardData(response.data); // Assuming the response contains the dashboard data
    };

    loadDashboardData();
  }, []);


  return (
    <div className='dashboard-parentContainer'>
    <div className="dashboard-container">
      <div className="chart-container">
        <h2 className="chart-title">Most Viewed Articles</h2>
        <BarChart width={600} height={300} data={dashboardData.mostViewed}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="views" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="chart-container">
        <h2 className="chart-title">Most Liked Articles</h2>
        <BarChart width={600} height={300} data={dashboardData.mostLiked}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="likes" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;
