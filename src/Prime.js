import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Prime(){
    const [num,setNum]=useState();
    const [result,setResult]=useState();
    const isPrime=(n)=>{
        if(n<=1) return false;
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0) return false;
        }
        return true;

    };
    const checkPrime=(num)=>{
        if(isPrime(num)){
            setResult(`${num} is a prime number`)
        }
        else{
            setResult(`${num} is not a prime number`)
        }
    }
    return(
        <div>
            <h1 className='h1'> Welcome to check the number is Prime or Not</h1>
            <hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-header'>
                                    To check Prime Or Not
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>Enter the number</h5>
                                    <input className='mb-3' type='Number' value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
                                    <button type='button' className='btn btn-primary' onClick={()=>checkPrime(Number(num))}>Check</button>
                                    <hr/>
                                    <h5 className='h5' id='op'>Output</h5>
                                    <h5>{result}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
    
}


export default Prime;
