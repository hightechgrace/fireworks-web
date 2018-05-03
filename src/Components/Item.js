import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import classes from './Item.css';



const item =()=>{
   
    return (
        <div className={classes.Active}>
        <p>Items goes here</p>
        </div>
    );
 };

 export default item;