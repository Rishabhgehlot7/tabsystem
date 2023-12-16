import React from "react";
import { NavigationContainer, TabNavigator } from "@react-navigation/tabs";

function HomeScreen() {
  // ... your home screen content
  return (
    <div>
      HomeScreen
    </div>
  )
}

function SettingsScreen() {
  // ... your settings screen content
  return (
    <div>
      SettingsScreen
    </div>
  )
}

const MyTabs = () => {
  return (
    <TabNavigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </TabNavigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
