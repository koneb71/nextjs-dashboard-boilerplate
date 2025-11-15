import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: { display: 'table', width: '100%', borderStyle: 'solid', borderWidth: 1 },
  tableRow: { flexDirection: 'row' },
  tableCol: { borderStyle: 'solid', borderWidth: 1, flex: 1, padding: 4 },
  tableCell: { fontSize: 12 }
});

const MyDocument = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Document>
        <Page>
          <Text>No data available.</Text>
        </Page>
      </Document>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <Document>
      <Page style={{ padding: 20 }}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            {columns.map(col => (
              <View style={styles.tableCol} key={col}>
                <Text style={styles.tableCell}>{col}</Text>
              </View>
            ))}
          </View>
          {data.map((row, rowIndex) => (
            <View style={styles.tableRow} key={rowIndex}>
              {columns.map(col => (
                <View style={styles.tableCol} key={col}>
                  <Text style={styles.tableCell}>{row[col]}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PDFExport = ({ data }) => (
  <div style={{ marginTop: '1rem' }}>
    <PDFDownloadLink document={<MyDocument data={data} />} fileName="data-table.pdf">
      {({ loading }) => (loading ? 'Preparing document...' : 'Export to PDF')}
    </PDFDownloadLink>
  </div>
);

export default PDFExport;
