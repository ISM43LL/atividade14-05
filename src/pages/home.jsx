import React from 'react';
import Layout from '../components/layout';
import Form from '../components/forms';

const Home = () => {
  return (
    <Layout>
      <section>
        <h2>Bem-vindo</h2>
        <p>Esta página é destinada para sugestões, reclamação, denúncias.</p>
        <div className="mt-6">
          <Form />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
