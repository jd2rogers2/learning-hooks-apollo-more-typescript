import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import { Opportunities } from './components/Opportunities';
import { Opportunity } from './components/Opportunity';
import { NewOpportunityForm } from './components/NewOpportunityForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [opportunities, setOpportunities] = useState([{
    location: 'bedford',
    title: 'help',
    description: 'we need some help with things',
    user_id: '1',
    id: '1'
  }]);

  const addOpportunity = (opp: IOpportunity) => {
    // gql call and then do the the rest in a call back so we have the new id?
    opp.id = `${opportunities.length + 1}`;
    const newOpportunities = [...opportunities, opp];
    setOpportunities(newOpportunities);
    // update url to be `opportunity/${newId}`
  }

  const getSelectedOpportunity: (id: string) => IOpportunity|undefined = (id) =>
    opportunities.find((opp: IOpportunity) => opp.id === id);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/opportunity/new" render={() => <NewOpportunityForm addOpportunity={addOpportunity} />} />
          <Route path="/opportunity/:id" render={props => <Opportunity opportunity={getSelectedOpportunity(props.match.params.id)} />} />
          <Route path="/opportunity" render={() => <Opportunities opportunities={opportunities} />} />
          <Route render={() => <Opportunities opportunities={opportunities} />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
