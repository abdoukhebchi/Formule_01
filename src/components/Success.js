import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
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

