import React from 'react';
import { Button } from 'ui';
import { ArrowRight, PlusCircle, Check, AlertTriangle } from 'lucide-react';
import { Badge } from 'ui';

const HistoryPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Schema History</h2>
      <div className="border rounded-md">
        <div className="border-b p-4 bg-gray-50">
          <div className="flex items-center space-x-2">
            <div className="text-gray-500">Filter by:</div>
            <Button variant="outline" size="sm">All Tables</Button>
            <Button variant="outline" size="sm">Last 30 days</Button>
            <Button variant="outline" size="sm">All Users</Button>
          </div>
        </div>
        <div className="divide-y">
          <div className="p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <PlusCircle className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Added columns to user_profiles</div>
                  <div className="text-sm text-gray-500">2 hours ago by Alex Chen</div>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="mr-2">user_profiles</Badge>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Migration executed in staging</div>
                  <div className="text-sm text-gray-500">Yesterday by Maria Lopez</div>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="mr-2">user_profiles</Badge>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <div className="font-medium">Schema drift detected in development</div>
                  <div className="text-sm text-gray-500">2 days ago • Automatic detection</div>
                </div>
              </div>
              <div className="flex items-center">
                <Badge className="mr-2">users</Badge>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;