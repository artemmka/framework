import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Esse from './components/Esse/Esse';
import Graph2D from './components/Graph2D/Graph2D';
import Calc from './components/Calc/Calc';
import Graph3D from './components/Graph3D/Graph3D';

export enum EPages {
  graph2D = 'graph2D',
  graph3D = 'graph3D',
  calculator = 'UniCalculator',
  esse = 'esse'
}

const App: React.FC = () => {
  const [pageName, setPageName] = useState<EPages>(EPages.graph3D);

  return (
    <div className="app">
      <Header setPageName={setPageName} />

      {pageName === EPages.graph3D && <Graph3D />}
      {pageName === EPages.esse && <Esse />}
      {pageName === EPages.graph2D && <Graph2D />}
      {pageName === EPages.calculator && <Calc />}
    </div>
  );
}

export default App;
