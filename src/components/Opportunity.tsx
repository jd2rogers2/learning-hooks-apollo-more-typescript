import * as React from 'react';

export const Opportunity: React.FC<IOpportunityProps> = ({opportunity}) => {
  return opportunity ? (
    <div>
      <h5>{opportunity.title}</h5>
      <p>{opportunity.location}</p>
      <p>{opportunity.description}</p>
    </div>
  ) : (
    <div></div>
  );
}
