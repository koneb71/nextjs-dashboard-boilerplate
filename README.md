# Next.js Dashboard Boilerplate

This repo provides a Next.js admin dashboard example featuring **Grid.js** for interactive data tables and **@react-pdf/renderer** for exporting data to PDF. It includes a sample dataset and demonstrates how to render the data as both an HTML table and a downloadable PDF.

## Features
- Next.js application ready to run on Node.js 16+.
- **Grid.js** integration for sortable, searchable, paginated data tables.
- **@react-pdf/renderer** workflow that converts the dataset into a PDF using a table layout.
- Sample dataset stored in `/data/sampleData.json`.
- Modular React components located in `/components`:
  - `DataTable`: displays the dataset using Grid.js.
  - `PDFExport`: defines a PDF document and provides a download link.
- Simple homepage at `pages/index.js` that loads the sample dataset, displays the table, and shows the PDF export button.

## Getting Started

Clone this repository and install the dependencies:

```bash
git clone https://github.com/koneb71/nextjs-dashboard-boilerplate.git
cd nextjs-dashboard-boilerplate
npm install
```

### Development server

Run the development server:

```bash
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000) and you should see the dashboard with the sample data. Any changes to the code will hot-reload during development.

### Building for production

To build and start the application in production mode:

```bash
npm run build
npm run start
```

### PDF Export

The PDF export functionality uses **@react-pdf/renderer**. On the home page, click the **Download PDF** button to download a PDF version of the sample data table. This demonstrates how you can create server‑side or client‑side PDF exports for your own datasets.

## Customizing

To use your own data, replace the contents of `data/sampleData.json` with your dataset and adjust the columns in `components/DataTable.js` and `components/PDFExport.js` if necessary. You can also extend the `DataTable` component with additional Grid.js options such as column formatting, server‑side data loading, or different themes.

## License

This project is provided as a starting point for your own dashboards. Feel free to modify and use it as needed.
