import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class Formule_2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
   
    render() {
        const {values,handleChange} = this.props ;

        return (
        <MuiThemeProvider >
        <React.Fragment>
      <AppBar title = " Compte rendu  "/>
         <TextField
           floatingLabelText = "Heure d'arrivé" 
          type="time"
         
          onChange = {handleChange('Harr')}
          defaultValue={values.Harr} 
         />
         <br/>
         <TextField
          hintText = "Nom du Bâtiment" 
      
          onChange = {handleChange('NomBat')}
          defaultValue={values.NomBat} 
         />
   <br/>
   <TextField
          hintText = "Etage Concerné" 
      
          onChange = {handleChange('Etge')}
          defaultValue={values.Etge} 
         />
         <br/>
         <TextField
          hintText = "Zone concernée" 
      
          onChange = {handleChange('Zone')}
          defaultValue={values.Zone} 
         />
          <br/>
          <TextField
          hintText = "Observations" 
      
          onChange = {handleChange('Obs')}
          defaultValue={values.Obs} 
         />
          
        <br/>
        <TextField
        
       Label="Heure de départ"
       type="time"
       onChange = {handleChange('Hdep')}
       defaultValue={values.Hdep}  />
       <br/>
       
 
       <br/>
       <RaisedButton
       label = "Continue"
       primary = {true}
       style = {styles.button}
       onClick = {this.continue}
       
       />
        <RaisedButton
       label = "précédent"
       secondary = {true}
       style = {styles.button}
       onClick = {this.back}
       
       />
       
          </React.Fragment>
          </MuiThemeProvider>
        )
    }
}
const styles = {
    textField: {
       
        width: 200,
      },
    button : {
        margin : 15 
    }

}

export default Formule_2
