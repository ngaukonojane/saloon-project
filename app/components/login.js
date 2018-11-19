import React from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         keyboardAvoidingView,
         TouchableOpacity,
         Asyncstorage,
          } ;
import{stackNavigator} from 'react-navigation';


export default class login extends React.Component {
	constructor(props){
		super(props);
		this.state(
			username='',
			email-'',
			password='',
			)
	}
	componentDidMount(){
		this_loadInitialState().done();
	}

	_loadInitialState = async() => {
		var value
	}



  render() {
    return (
      
    );
  }
}