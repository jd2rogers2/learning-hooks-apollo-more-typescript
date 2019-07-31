import * as React from 'react';

export const Opportunity: React.FC<IOpportunityProps> = ({opportunity}) => {
  return opportunity ? (
    <div>
      {opportunity.title}
    </div>
  ) : (
    <div></div>
  );
}
