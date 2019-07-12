import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List , ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Conf extends Component {
    continue = e => {
        e.preventDefault();
        // conexion APi ...ect code is here 
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values : {
            Cat,Pr,Site,Decpar,Reddate,Clopar,fDate,dateclo,Harr,NomBat,Etge,Zone,Obs,Hdep }} = this.props ;

        return (
        <MuiThemeProvider>
        <React.Fragment>
        <AppBar title = "Confirmation "/>
        <br/>
        <List>
            <ListItem
                primaryText = "Catégorie"
                secondaryText = {Cat} >
            </ListItem>
            <ListItem
                primaryText = "Priorité"
                secondaryText = {Pr}>
            </ListItem>
            <ListItem
                primaryText = "Site"
                secondaryText = {Site}>
            </ListItem>
            <ListItem
                primaryText = "Déclaré par"
                secondaryText = {Decpar}>
            </ListItem>
            <ListItem
                primaryText = "Rédigé le"
                secondaryText = {Reddate}>
            </ListItem>
            <ListItem
                primaryText = "Clôturé par"
                secondaryText = {Clopar}>
            </ListItem>
            <ListItem
                primaryText = "Date de fin"
                secondaryText = {fDate}>
            </ListItem>
            <ListItem
                primaryText = "A clôturer avant le"
                secondaryText = {dateclo}>
            </ListItem>
            <ListItem
                primaryText = "Heure d'arrivé"
                secondaryText = {Harr}>
            </ListItem>
            <ListItem
                primaryText = "Nom du Bâtiment"
                secondaryText = {NomBat}>
            </ListItem>
            <ListItem
                primaryText = "Etage Concerné"
                secondaryText = {Etge}>
            </ListItem>
            <ListItem
                primaryText = "Zone concernée"
                secondaryText = {Zone}>
            </ListItem>
            <ListItem
                primaryText = "Observations"
                secondaryText = {Obs}>
            </ListItem>
            <ListItem
                primaryText = "Heure de départ"
                secondaryText = {Hdep}>
            </ListItem>
        </List>
       <RaisedButton
       label = "Confirme"
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
    button : {
        margin : 15 
    }

}

export default Conf
