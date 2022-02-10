import React from 'react';
import UserContext from "../context.js";
import ATM from "./ATM";
import Card from "./card.js";
const Withdraw = () => {
  // gets context info
  const ctx = React.useContext(UserContext);
  //state for withdrawal amount
  const [amount, setAmount] = React.useState(0.00);
  //gets user account info
  const index = ctx.users.length-1;
  console.log(index);
  const [totalState, setTotalState] = React.useState(ctx.users[index].balance);
  
  //sets atm component status to withdraw
  const [ atmMode ] = React.useState("Cash Back");
  //state to enable and disable submit button
  const [validTransaction, setValidTransaction] = React.useState(false);
  // Clears input field after form is submitted or ATM mode Changed
  const [value, setValue] = React.useState("");
  //displays balance amount
  let status = `Balance: $${totalState.toFixed(2)} `;

    const handleChange = (event) => {
      setValue(event.target.value);
      setAmount(Number(event.target.value));
      if(event.target.value<=0){
        setValidTransaction(false);
      } else if(atmMode==="Cash Back" && Number(event.target.value) >totalState){
        setValidTransaction(false);
      } else setValidTransaction(true);
    };

    const handleSubmit = (event) => {
      let newTotal = 0;
      if(Number(amount) >totalState){
        newTotal = totalState;
        setValidTransaction(false);
        //Transaction Declined message
        alert("Declined");
      }else if(atmMode==="Cash Back" && Number(amount) <=totalState){
          newTotal = totalState - amount;
          alert(`$${amount.toFixed(2)} Transaction Complete!`);
          setValidTransaction(false);
      } else newTotal = totalState;
      setTotalState(newTotal);
      ctx.users[index].balance = newTotal;
      // Clears form
      setValue("");
      event.preventDefault();
    };
    
     
    return (
        <Card 
        className="withdraw-page p-3"
        hdrcolor="#508593"
        hdrtext="#F1E8E9"
        bodycolor="#544f63"
        bodytext="#F1E8E9"
        header="Withdraw"
        title={status}
        text="Cash Back"
        body={(
      <form 
      className="text-center"
      onSubmit={handleSubmit}>
        <ATM onChange={handleChange} atmMode={atmMode} validTransaction={validTransaction} value={value}/>
      </form>)}>
      </Card>
    );
  };
export default Withdraw;