import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Confirm from './Confirm';


export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }
  render() {
     const {values, handleChange} = this.props;   
    return (
      <MuiThemeProvider>
        <React.Fragment>
        {/* <AppBar title="Enter User Details" /> */}
            <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"  
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            />
            <br/>
          <TextField
            
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"  
            onChange={handleChange('LastName')}
            defaultValue={values.lasttName}
            />
             <br/>
             <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"  
            onChange={handleChange('Email')}
            defaultValue={values.Email}
            />
            <br/>
            <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            /
            </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles ={
    button:{
        margin: 15
    }
}

export default FormPersonalDetails;
