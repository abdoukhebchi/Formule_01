import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  };
export class Success extends Component {
    ret = e => {
        e.preventDefault();
        this.props.returnf1();
    }
    render() {
        return (
            <MuiThemeProvider theme = {theme}>
             <React.Fragment>

         <AppBar  position="static" title = "Success">

        
         </AppBar>

               <h1>Merci</h1>

          
             </React.Fragment>
             </MuiThemeProvider>
            
        )
      
    }
    
}



export default Success

