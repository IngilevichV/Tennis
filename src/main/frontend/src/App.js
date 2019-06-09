import React, {Fragment} from 'react';
import $ from 'jquery'
import MatchCard from './MatchCard'
import AddMatchDialog from './AddMatchDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
 margin: 15,
};

export default class App extends React.Component {
  state={
     username:'',
     password:''
     }

  componentDidMount() {
    $.getJSON( "/api/matches", ( data ) => {
      this.setState({ matches: data });
    });
  }

  render = () => {
    console.info(this.state)
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             // onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               // onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style}
             // onClick={(event) => this.handleClick(event)}
             />
         </div>
         </MuiThemeProvider>
      </div>
    )
  }
}
