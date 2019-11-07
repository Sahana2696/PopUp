import React,{Component} from 'react';
import './style.css';  

const PopUp=(props)=> {  
 const {text,closePopUp}=props;
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{text}</h1>
<button onClick={closePopUp}className='btn'>close me</button>  
</div>  
</div>  
);  
}  


export default PopUp;


