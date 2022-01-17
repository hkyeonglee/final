import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';
function Login() {
    let navigate = useNavigate();
    const[id,setId]=useState('');
    const[pw,setPw]=useState('');
    const userlist=[["hk","21"]];

    const onIdHandler = (e)=>{
        setId(e.currentTarget.value);
    }
    const onPwHandler = (e)=>{
        setPw(e.currentTarget.value);
    }
    const onSubmitHandler = (e)=>{
        for(const user of userlist){
            if(user[0]===id&&user[1]==pw){
                alert('login success');
                    navigate('/');
                    break;
            }
            else{alert('id와 pw를 다시 확인해주세요');}
        }
        
    }
    return(
        <div className="login">
            <h1>LOGIN🥨</h1>
            <form onSubmit={onSubmitHandler}>
                <label>ID   </label> 
                <input type="text" value={id}onChange={onIdHandler}/><br/>
                <label>PW </label> 
                <input type="password" value={pw}onChange={onPwHandler}/>
                <br/>
                <br/>
                <br/>
                <button type="submit">submit</button>
            </form>
           
        </div>
    );
}

export default Login;