import React from 'react';
import './App.css';

import { Layout } from 'antd';
import AppHeader from './components/comman/Header';
import AppHome from './views/home';
import AppFooter from './components/comman/Footer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
