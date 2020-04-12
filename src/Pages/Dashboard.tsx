import React from 'react';
import { Button } from 'antd';
import Http from '../api';

const Dashboard = () => {

  const handleClick = async () => {
    const response = await Http.get('/cookies', {
    });

    console.log(response);
  }

  return (
    <div>
      <Button
        onClick={handleClick}
      >쿠키쿠키!</Button>
      <br />
    </div>
  )
}

export default Dashboard;
