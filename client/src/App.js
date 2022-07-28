import React from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import Project from './components/Project';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SignIN from './components/SignInPage';
import SignUp from './components/SignUpPage';
import { setContext } from '@apollo/client/link/context';
function App() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  });
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App" >
        <Nav></Nav>
        <div className='bg-light' style={{height:"6px"}}></div>
      <Routes>
  <Route path="/" element={<HomePage/>} exact/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/login" element={<SignIN/>}/>
  <Route path="/sign" element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
