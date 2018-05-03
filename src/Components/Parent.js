import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import classes from './Parent.css';



const parent =()=>{
   
    return (
        <div className={classes.Active}>
        <p>Our routing mechanism dey work eh</p>
        </div>
    );
 };

 export default parent;