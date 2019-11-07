import React from "react";

const Popup = () => {
  return (
    <div class="container">
      <button
        type="button"
        class="btn btn-info btn-lg"
        data-toggle="modal"
        data-target="#myModal"
        style={{margin: "300px"}}
      >
        Click
      </button>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title" 
              style={{background:"#5bc0de",height: '4rem',marginLeft: '-14px',marginRight: '-14px'}}>
              PriceType:1 </h4>
            </div>
            <div class="modal-body" style={{display:"flex"}}>

              <div id="dialog" title="Level Id" style={{width:"100px"}} >
                <select>
                  <option value="num">Level Id</option>
                  <option value="num1">8416040</option>
                  <option value="num2">8416041</option>
                  <option value="num3">8416042</option>
                  <option value="num4">8416043</option>
                </select>
              </div>

              <div id="dialog" title="EAN"  style={{width:"120px"}}>
                <select>
                  <option value="select">EAN</option>
                  <option value="number">606043244</option>
                  <option value="number1">606043247</option>
                  <option value="number2">606043277</option>
                  <option value="number3">606043373</option>
                </select>
              </div>

              <div id="dialog" title="Country"  style={{width:"100px"}}>
                <select>
                  <option value="country">Country</option>
                  <option value="CA">CA</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="France">France</option>
                </select>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" >
                Submit
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
