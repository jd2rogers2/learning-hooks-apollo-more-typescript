import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import { Opportunities } from './components/Opportunities';
import { Opportunity } from './components/Opportunity';
import { NewOpportunityForm } from './components/NewOpportunityForm';
import { Footer } from './components/Footer';

const App: React.FC = ({}, IAppState) => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/opportunity/new" component={NewOpportunityForm} />
          <Route path="/opportunity/:id" component={Opportunity} />
          <Route path="/opportunity" component={Opportunities} />
          <Route component={Opportunities} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
