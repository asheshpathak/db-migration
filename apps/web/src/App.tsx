import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import SchemaPage from '@pages/SchemaPage';
import MigrationPage from '@pages/MigrationPage';
import HistoryPage from '@pages/HistoryPage';
import ComparisonPage from '@pages/ComparisonPage';
import AnalyticsPage from '@pages/AnalyticsPage';
import { EnvironmentProvider } from '@contexts/EnvironmentContext';

const App: React.FC = () => {
  return (
    <EnvironmentProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<SchemaPage />} />
          <Route path="/migrations" element={<MigrationPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/compare" element={<ComparisonPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </Layout>
    </EnvironmentProvider>
  );
};

export default App;