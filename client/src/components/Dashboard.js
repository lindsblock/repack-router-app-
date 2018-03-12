import React from 'react';
import { isAuthenticated } from '../fakeAuth'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {
  if (isAuthenticated()) {
    return (
      <h3>You are logged in!</h3>
    )
  } else {
    return <Redirect to="/login" />
  }
}

export default Dashboard;
