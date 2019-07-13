import React, { Component  }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';






export class Formule_1 extends Component {
   

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
 
        const {values,handleChange} = this.props ;
         //const [selectedDate, handleDateChange] = useState(new Date());

        return (
         
        <MuiThemeProvider  >
        <React.Fragment>
      <AppBar title = " Compte rendu  "/>
         <TextField
          hintText = "Catégorie" 
         
          onChange = {handleChange('Cat')}
          defaultValue={values.Cat} 
         />
         <br/>
         <TextField
          hintText = "Priorité" 
         
          onChange = {handleChange('Pr')}
          defaultValue={values.Pr} 
         />
   <br/>
   <TextField
          hintText = "Site" 
        
          onChange = {handleChange('Site')}
          defaultValue={values.Site} 
         />
         <br/>
         <TextField
          hintText = "Déclaré par" 
        
          onChange = {handleChange('Decpar')}
          defaultValue={values.Decpar} 
         />
      
       
        <br/>
        <TextField
      
      floatingLabelText ="Rédigé le"
       type="datetime-local"
       InputLabelProps={{
        shrink: true,
      }}
       onChange = {handleChange('Reddate')}
       defaultValue={values.Reddate} 
       
         
       
       />
        


        <br/>
        <TextField
          hintText = "Clôturé par" 

          onChange = {handleChange('Clopar')}
          defaultValue={values.Clopar} 
         />
          <br/>
          <TextField
        InputLabelProps={{
            shrink: true,
          }}
       Label="Date de fin"
       type="datetime-local"
       onChange = {handleChange('fDate')}
    
       defaultValue={values.fDate}  />
        <br/>
        <TextField
        InputLabelProps={{
            shrink: true,
          }}
       Label="A clôturer avant le"
       type="datetime-local"
  
       onChange = {handleChange('dateclo')}
       defaultValue={values.dateclo}  />
       <br/>
       <RaisedButton
       label = "Continue"
       primary = {true}
       style = {styles.button}
       onClick = {this.continue}
       
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

export default Formule_1
