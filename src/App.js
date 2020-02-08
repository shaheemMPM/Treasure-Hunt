import React from 'react';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div>
      <Layout>
        <Auth />
      </Layout>
    </div>
  );
}

export default App;
