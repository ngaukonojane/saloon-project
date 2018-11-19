import React from 'react';
import { StyleSheet, Text, View } ;
import{stackNavigator} from 'react-navigation';
import login from '.app/components/login'

const Application=stackNavigator({
  Home:{screen.login};
},{
  NavigationOptions{
    header:false,
  }
}

});
export default class App extends React.Component {
  render() {
    return (
      <Application/>
    );
  }
}


