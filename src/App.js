// App.js
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Tabs, Tab } from '@material-ui/core'; // You might need to install @material-ui/core

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
};

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About" component={Link} to="/about" />
            <Tab label="Contact" component={Link} to="/contact" />
          </Tabs>
        </AppBar>

        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Contact />
          </TabPanel>
        </SwipeableViews>
      </div>
    </Router>
  );
};

export default App;
