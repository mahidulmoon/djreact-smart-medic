import React from 'react';
import './App.css';
import Homepage from "./components/Homapage";
import Homebody from "./components/homebody";
import Department from "./components/department";
import Login from "./components/login";
import Registration from "./components/registration";
import ChangePass from "./components/change_pass";
import BookAppoinment from "./components/BookAppoinment";
import Prescription from "./components/prescription";
import Doctorlist from "./components/doctorlist";
import PrescriptionList from './components/Prescriptionlist';
import PrescriptioDetails from './components/prescriptiondetails';
import AppoinmentList from "./components/appoimentlist";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Homepage>
        <Switch>
          <Route path="/" exact component={Department} />
          <Route path="/medicineshop" exact component={Homebody} />
          <Route path="/login" component={Login}  />
          <Route path="/prescriptionlist" component={PrescriptionList} />
          <Route path="/registration" component={Registration} />
          <Route path="/appoinmentlist" component={AppoinmentList} />
          <Route path="/changepass" component={ChangePass} />
          <Route path="/bookapoinment" component={BookAppoinment} />
          <Route path="/prescription/:ptid/" exact component={PrescriptioDetails} />
          <Route path="/prescription/:ptname/:ptphnno" exact component={Prescription} />
          <Route path="/doctorlist" component={Doctorlist} />
        </Switch>
        
      </Homepage>
    </Router>
  );
}

export default App;
