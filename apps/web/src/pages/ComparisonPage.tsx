import React from 'react';

const ComparisonPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Compare & Diff</h2>
      <p className="text-gray-500 mb-6">Compare schemas across environments</p>
      
      <div className="bg-white border rounded-md p-6 text-center py-12">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Select environments to compare</h3>
        <p className="text-gray-500">
          Choose a source and target environment to view schema differences
        </p>
      </div>
    </div>
  );
};

export default ComparisonPage;