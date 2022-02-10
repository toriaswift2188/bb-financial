import React from 'react';
import Card from "./card.js";
import UserContext from "../context.js";

const CreateAccount = () => {
  const ctx = React.useContext(UserContext); 
 //for enabling submit button
  const [validTransaction, setValidTransaction] = React.useState(false);
  //shows input fields and hides them after from submitted
  const [show, setShow]         = React.useState(true);
  //sets error messsage
  const [status, setStatus]     = React.useState('');
  //sets user properties
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
   
  const enableSubmit = () => {
    //setValue(event.target.value);
    //console.log(`Value ${value}`);
    if(name===""||email===""||password===""){
      setValidTransaction(false);
    } else setValidTransaction(true);
    console.log(`valid ${validTransaction}`);
  };

  const validate = (field, label) => {
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  const handleCreate = () => {
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    alert("Account Successfully Created!");
    setShow(false);
  }    

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setValidTransaction(false);
  }
    return (
        <Card
        className="deposit-page p-3"
        hdrcolor="#508593"
        hdrtext="#F1E8E9"
        bodycolor="#544f63"
        bodytext="#F1E8E9"
        status={status}
        body={show ? ( 
                <form>
                <label>Name</label>
                <input type="input" 
                    className="form-control"
                    id="name" placeholder="Enter name" 
                    value={name} 
                    onChange={e => {
                    setName(e.currentTarget.value);
                    enableSubmit();
                    }} />
                <label>Email address</label>
                <input type="input" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={e => {
                      setEmail(e.currentTarget.value);
                      enableSubmit();
                    }}/>
                <label>Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={e => {
                  setPassword(e.currentTarget.value);
                  enableSubmit();
                  }}/><br/>
                <button type="submit" className="btn btn-light ml-auto" disabled={!validTransaction} onClick={handleCreate}>Create Account</button>
                </form> 
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    );
}
export default CreateAccount;