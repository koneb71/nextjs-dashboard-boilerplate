import React from 'react';
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";

const DataTable = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available.</p>;
  const columns = Object.keys(data[0]);
  const rows = data.map(item => columns.map(col => item[col]));
  return (
    <div>
      <Grid
        data={rows}
        columns={columns}
        search={true}
        pagination={{ enabled: true, limit: 5 }}
        sort={true}
      />
    </div>
  );
};

export default DataTable;
