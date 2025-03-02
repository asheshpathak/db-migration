import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'ui';
import { RefreshCw, PlusCircle } from 'lucide-react';
import StatusBadge from '@components/common/StatusBadge';
import { useEnvironment } from '@contexts/EnvironmentContext';

const SchemaPage: React.FC = () => {
  const { environment } = useEnvironment();
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Schema Overview</h2>
          <p className="text-gray-500">users_db • {environment}</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Migration
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">users</CardTitle>
              <StatusBadge status="synced" />
            </div>
            <CardDescription>User account information</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="border rounded-md">
              <div className="flex border-b py-2 px-3">
                <div className="w-1/3 font-medium">id</div>
                <div className="w-1/3 text-gray-600">UUID</div>
                <div className="w-1/3 text-gray-600">PRIMARY KEY</div>
              </div>
              <div className="flex border-b py-2 px-3">
                <div className="w-1/3 font-medium">email</div>
                <div className="w-1/3 text-gray-600">VARCHAR(255)</div>
                <div className="w-1/3 text-gray-600">UNIQUE, NOT NULL</div>
              </div>
              <div className="flex border-b py-2 px-3">
                <div className="w-1/3 font-medium">password_hash</div>
                <div className="w-1/3 text-gray-600">VARCHAR(255)</div>
                <div className="w-1/3 text-gray-600">NOT NULL</div>
              </div>
              <div className="flex border-b py-2 px-3">
                <div className="w-1/3 font-medium">created_at</div>
                <div className="w-1/3 text-gray-600">TIMESTAMP</div>
                <div className="w-1/3 text-gray-600">NOT NULL</div>
              </div>
              <div className="flex py-2 px-3">
                <div className="w-1/3 font-medium">updated_at</div>
                <div className="w-1/3 text-gray-600">TIMESTAMP</div>
                <div className="w-1/3 text-gray-600">NOT NULL</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="text-xs w-full">View Details</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">user_profiles</CardTitle>
              <StatusBadge status="changes" />
            </div>
            <CardDescription>Extended user profile information</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="border rounded-md">
              <div className="flex border-b py-2 px-3">
                <div className="w-1/3 font-medium">user_id</div>
                <div className="w-1/3 text-gray-600">UUID</div>
                <div className="w-1/3 text-gray-600">FOREIGN KEY</div>
              </div>
              <div className="flex border-b py-2 px-3 bg-green-50">
                <div className="w-1/3 font-medium">first_name</div>
                <div className="w-1/3 text-gray-600">VARCHAR(100)</div>
                <div className="w-1/3 text-gray-600">NOT NULL</div>
              </div>
              <div className="flex border-b py-2 px-3 bg-green-50">
                <div className="w-1/3 font-medium">last_name</div>
                <div className="w-1/3 text-gray-600">VARCHAR(100)</div>
                <div className="w-1/3 text-gray-600">NOT NULL</div>
              </div>
              <div className="flex border-b py-2 px-3">
                <div className="w-1/3 font-medium">address</div>
                <div className="w-1/3 text-gray-600">TEXT</div>
                <div className="w-1/3 text-gray-600"></div>
              </div>
              <div className="flex py-2 px-3">
                <div className="w-1/3 font-medium">phone</div>
                <div className="w-1/3 text-gray-600">VARCHAR(20)</div>
                <div className="w-1/3 text-gray-600"></div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button size="sm" className="text-xs w-full">Generate Migration</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SchemaPage;