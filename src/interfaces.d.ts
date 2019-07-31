interface IAppState {
  opportunities: Array<IOpportunity>;
}

interface IOpportunity {
  location: string;
  title: string;
  description: string;
  user_id: string
}

interface IUser {
  username: string;
  email: string;
}
