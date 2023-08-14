import React from "react";
import Dashboard from '../../images/illustration-dashboard.png'
import classes from './Main.module.scss'

const Main = () => {
  return (
    <main className={classes.main}>
      <img src={Dashboard} alt="Dashboard" className=""/>
    </main>
  );
};

export default Main;
