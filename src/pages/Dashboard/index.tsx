import * as React from 'react';
import { Pagination } from '@alifd/next';


const Dashboard = () => {
  return (
    <div>
      <Pagination
        pageSizeSelector="dropdown"
        pageSizeList={[10, 20, 50]}
      />
    </div>
  );
};

export default Dashboard;
