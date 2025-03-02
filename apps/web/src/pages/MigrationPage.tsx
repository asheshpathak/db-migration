import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Badge } from 'ui';
import { FileDiff, Play } from 'lucide-react';
import { useEnvironment } from '@contexts/EnvironmentContext';
import StatusBadge from '@components/common/StatusBadge';

const MigrationPage: React.FC = () => {
  const { environment } = useEnvironment();
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Migrations</h2>
          <p className="text-gray-500">Pending and recent migrations</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <FileDiff className="h-4 w-4 mr-2" />
            View All
          </Button>
          <Button size="sm">
            <Play className="h-4 w-4 mr-2" />
            Execute Migrations
          </Button>
        </div>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Pending Migrations</CardTitle>
          <CardDescription>Ready to be executed in {environment}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-md p-4 bg-amber-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Add first_name and last_name to user_profiles</h3>
                  <div className="text-sm text-gray-500 mt-1">Created 2 hours ago by Alex Chen</div>
                </div>
                <StatusBadge status="pending" />
              </div>
              <div className="mt-3 text-sm">
                <div className="font-medium mb-1">Changes:</div>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Add NOT NULL varchar(100) column "first_name" to user_profiles</li>
                  <li>Add NOT NULL varchar(100) column "last_name" to user_profiles</li>
                </ul>
              </div>
              <div className="flex justify-end mt-3 space-x-2">
                <Button variant="outline" size="sm">View SQL</Button>
                <Button size="sm">Execute</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Migrations</CardTitle>
          <CardDescription>Successfully executed in {environment}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Add phone field to user_profiles</h3>
                  <div className="text-sm text-gray-500 mt-1">Executed yesterday by Maria Lopez</div>
                </div>
                <StatusBadge status="complete" />
              </div>
            </div>
            
            <div className="border rounded-md p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Create initial users and user_profiles tables</h3>
                  <div className="text-sm text-gray-500 mt-1">Executed 3 days ago by John Smith</div>
                </div>
                <StatusBadge status="complete" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MigrationPage;