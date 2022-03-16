import React from 'react';
import CreateWorkSpace from './CreateWorkSpace';
import 'antd/dist/antd.css';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <CreateWorkSpace />
    </div>
  );
};

export default App;
