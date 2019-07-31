interface IOpportunity {
  location: string;
  title: string;
  description: string;
  user_id: string;
  id: string;
}

interface IUser {
  username: string;
  email: string;
  id: string;
}

interface INewOpportunityFormProps {
  addOpportunity: (opportunity: Dispatch<SetStateAction<IOpportunity>>) => void;
}

interface IAppState {
  opportunities: Array<IOpportunity>;
}

interface IOpportunitiesProps {
  opportunities: Array<IOpportunity>;
}

interface IOpportunityProps {
  opportunity: IOpportunity|undefined;
}
