import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, PlusCircle } from 'lucide-react';
import { useEnvironment } from '@contexts/EnvironmentContext';

const Sidebar: React.FC = () => {
  const { environment, setEnvironment } = useEnvironment();
  const location = useLocation();
  
  return (
    <div className="w-64 border-r bg-white p-4">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">ENVIRONMENTS</h3>
        <div className="space-y-1">
          {[
            { id: 'development', label: 'Development' },
            { id: 'staging', label: 'Staging' },
            { id: 'production', label: 'Production' }
          ].map(env => (
            <button
              key={env.id}
              className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                environment === env.id 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setEnvironment(env.id as any)}
            >
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  env.id === 'development' ? 'bg-green-500' : 
                  env.id === 'staging' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                {env.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">DATABASES</h3>
        <div className="space-y-1">
          {['users_db', 'products_db', 'orders_db', 'analytics_db'].map(db => (
            <button key={db} className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
              <div className="flex items-center">
                <Database className="h-4 w-4 mr-2 text-gray-500" />
                {db}
              </div>
            </button>
          ))}
          <button className="w-full text-left px-3 py-2 rounded-md text-sm text-blue-600 hover:bg-blue-50">
            <div className="flex items-center">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Database
            </div>
          </button>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-500 mb-2">NAVIGATION</h3>
        <div className="space-y-1">
          {[
            { path: '/', label: 'Schema Overview' },
            { path: '/migrations', label: 'Migrations' },
            { path: '/history', label: 'History' },
            { path: '/compare', label: 'Compare & Diff' },
            { path: '/analytics', label: 'Analytics' }
          ].map(nav => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`block px-3 py-2 rounded-md text-sm ${
                location.pathname === nav.path
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;