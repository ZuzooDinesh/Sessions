import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/OddEven.css'

function OddEven(){
    const [num,setNum]=useState('');
    const [result,setResult]=useState('');
    const evalv=async()=>{
        try{
            const response= await fetch(`https://zuzoodinesh.github.io/Practicea/oddeven?num=${num}`);
            const data=await response.text();
            setResult(data);
        }
        catch(error){
            setResult('Error: '+error.message)
        }
    };

    return (
      <div>
        <h1 className="h1">Welcome to OddEven</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div class="card">
                <div class="card-header">Odd or Even Evaluator</div>
                <div class="card-body">
                  <h5 class="card-title">Enter the number</h5>
                  <input
                    className="mb-3"
                    type="number"
                    value={num}
                    onChange={(e) => {
                      setNum(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={evalv}
                  >
                    {" "}
                    Check
                  </button>
                  <hr />
                  <h5 className="h5" id="op">
                    Output:
                  </h5>
                  <h5>{result}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default OddEven;
