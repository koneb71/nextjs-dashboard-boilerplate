import React from 'react';
import DataTable from '../components/DataTable';
import PDFExport from '../components/PDFExport';
import sampleData from '../data/sampleData.json';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      <DataTable data={sampleData} />
      <div style={{ marginTop: '1rem' }}>
        <PDFExport data={sampleData} />
      </div>
    </div>
  );
}
