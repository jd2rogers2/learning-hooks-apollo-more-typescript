import * as React from 'react';
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div>
      <Link to="/opportunity">View All Opportunities</Link>
      <Link to="/opportunity/new">Create a New Opportunity</Link>
    </div>
  );
}
