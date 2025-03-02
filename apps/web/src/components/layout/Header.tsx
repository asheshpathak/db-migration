import React from 'react';
import { Database, GitBranch, Settings } from 'lucide-react';
import { Button } from 'ui';

const Header: React.FC = () => {
  return (
    <header className="border-b bg-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold">SchemaSync</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-500">Current project:</div>
            <div className="flex items-center">
              <span className="font-medium">E-commerce Platform</span>
              <GitBranch className="ml-2 h-4 w-4 text-gray-500" />
              <span className="ml-1 text-sm text-gray-500">main</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;