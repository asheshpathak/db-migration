import React from 'react';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Schema Analytics</h2>
      <p className="text-gray-500 mb-6">View schema statistics and metrics</p>
      
      <div className="bg-white border rounded-md p-6 text-center py-12">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Analytics Dashboard</h3>
        <p className="text-gray-500">
          Schema statistics and migration metrics will be displayed here
        </p>
      </div>
    </div>
  );
};

export default AnalyticsPage;