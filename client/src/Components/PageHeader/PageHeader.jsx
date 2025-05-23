import React from 'react';
import './PageHeader.css'; // Optional for styling

function PageHeader({ title }) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
    </div>
  );
}

export default PageHeader;
