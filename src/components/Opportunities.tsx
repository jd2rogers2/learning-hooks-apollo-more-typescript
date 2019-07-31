import * as React from 'react';
import { Link } from "react-router-dom";

export const Opportunities: React.FC<IOpportunitiesProps> = ({opportunities}) => {
  return (
    <div>
      {opportunities.map(opp => (
        <p key={opp.id}>
          <Link to={`/opportunity/${opp.id}`}>{opp.title}</Link>{opp.description}
        </p>
      ))}
    </div>
  );
}
