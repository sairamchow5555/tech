import React from 'react';
import './App.css';

import { Layout } from 'antd';
import AppHeader from './components/comman/Header';

const { Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
    </Layout>
  );
}

export default App;
