import React, { Component } from 'react';
import Formule_1 from './Formule_1';
import Formule_2 from './Formule_2';
import   Conf  from './Conf';
import { Success } from './Success';

export class User extends Component {
    state = {
        step : 1 ,
        Cat : '' ,Pr: '' , Site : '' , Decpar: '' ,Reddate : '2019-12-31T00:00' ,
        Clopar: '' , fDate : '2019-12-31T00:00' , dateclo  : '2019-19-31T00:00' ,Harr : '00:00' , NomBat : '' ,
        Etge : '' ,Zone : '' , Obs : '' , Hdep: '00:00'

    }
   
    // 
    returnf1 = () => {
        const {step} = this.state ;
        this.setState ({step : 1});
    }
    nextStep = () => {
        const {step} = this.state ;
        this.setState ({
            step : step +1 
        });
    }
    //
    prevStep = () => {
        const {step} = this.state ;
        this.setState ({
            step : step -1 
        });
    }
    // 
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
  
    
    

    render() {
        const {step} = this.state ;
        const { Cat,Pr,Site,Decpar,Reddate,Clopar,fDate,dateclo,Harr,NomBat,Etge,Zone,Obs,Hdep} = this.state;
        const values  = {
            Cat,Pr,Site,Decpar,Clopar,Reddate,fDate,dateclo,Harr,NomBat,Etge,Zone,Obs,Hdep
        }
      
       switch (step){
         case 1 : 
         return (
             <Formule_1
             nextStep = {this.nextStep}
             handleChange = {this.handleChange}
             values = {values}
           
             />

         );
         case 2 :
         return (


            <Formule_2
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            values = {values}
         
            />
         );
         case 3 : 
         return (


            <Conf
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
         
            values = {values}
            />
         );
         
         case 4 : 
       
         return (


            <Success
            returnf1 = {this.returnf1}
        
            />
         );
         
       }

        
       
    }
}

export default User
