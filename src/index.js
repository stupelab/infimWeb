import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './Containers/Header';
import Home from './Containers/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import ProjectsList from './Containers/ProjectsList';
import ProjectDetail from './Containers/ProjectDetail';

import reducers from './reducers';

import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store} >
          <HashRouter>
              <span>
                <Header />
                      <Route exact path="/" component={Home} />
                        <Route exact path="/project/:id" component={ProjectDetail}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/projects" component={ProjectsList} />
                <Footer />
              </span>
          </HashRouter>
    </Provider>,
    document.getElementById('root'),
);
