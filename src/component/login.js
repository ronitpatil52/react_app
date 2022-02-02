import React, { Component } from 'react';  
import './login.css';
import signup_page from '../img/signup_page.jpg';

class LoginContainer extends Component { 
   constructor(props){
      super(props);
      this.state={
         login:'coach',
         fields:{},
         errors:{},
      }
   }
   onLogin = (e) =>{
      this.setState({login:e.target.value});
   }
  

   handleSubmit = (e) =>
   {
     
      e.preventDefault();
      console.log(e);
   }

   handleChnage = (field, e) => {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({fields});
   }
   

   render() {  
      
      return (  
        <div className="back_login" style={{backgroundImage: `url(${signup_page})`}}>
           <div className="label_login">
                 Login
            </div>
             <div className="box_login">
                
                <div className="radio_login">
                    <input type="radio" name="login" value="coach" defaultChecked onClick={this.onLogin} />
                   <label >As a Life Coach</label>
                   <input type="radio" className="radio2" name="login" value="user" onClick={this.onLogin}/>
                   <label >As a User</label>
                 </div>
              
               {this.state.login == 'coach' && 
              <form>
              <div className="form1_login">
                  <div className="input-group1_login">
                      <input 
                        className="input1_login" 
                        type="text" 
                        refs="email" 
                        placeholder="*E-mail"  
                        onChange={this.handleChnage.bind(this, "email")}
                        value={this.state.fields["email"]}
                        />
                  </div>
                  <span>xchjbdh</span>
                  <div className="input-group1_login">
                        <input 
                           className="input1_login" 
                           type="text"  
                           refs="password" 
                           placeholder="*Password"  
                           onChange={this.handleChnage.bind(this, "password")}
                           value={this.state.fields["password"]}
                           />
                        <p className="forgot_pass">Forgot Password?</p>
                  </div>
                     <button className="submit_login" onSubmit={this.handleSubmit.bind(this)}>Login</button><br></br>
                        <div className="last_login">
                           <h5>Don't have an account?</h5>
                           <button className="login_login">Sign Up Now</button>
                        </div>   
              </div>
               
            </form>
              
              } 







              {/* {this.state.login == 'user' && 
              <form>
              <div className="form1_login">
                  <div className="input-group1_login">
                     <input className="input1_login" type="email" placeholder="*E-mail" />
                  </div>
                  <div className="input-group1_login">
                        <input className="input1_login" type="password"  placeholder="*Password"/>
                        <p className="forgot_pass">Forgot Password?</p>
                  </div>
                     <button className="submit_login">Login</button>
                     <div className="last_login">
                        <h5>Don't have an account?</h5>
                        <button className="login_login">Sign Up Now</button>
                     </div>  
              </div>
               
            </form>
              
              } */}
           </div>
        </div>


         
      );  
   }  
}  
export default LoginContainer;  
