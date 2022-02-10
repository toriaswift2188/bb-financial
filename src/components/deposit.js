import React from 'react';
import UserContext from "../context.js";
import ATM from "./ATM";
import Card from "./card.js";

const Deposit = () => {
  // gets context info
  const ctx = React.useContext(UserContext);
  //state for deposit amount
  const [deposit, setDeposit] = React.useState(0.00);
  //gets user account info
  const index = ctx.users.length-1;
  console.log(index);
  const [totalState, setTotalState] = React.useState(ctx.users[index].balance);
  //sets atm component status to deposit
  const [atmMode] = React.useState("Deposit");
  //state to enable and disable submit button
  const [validTransaction, setValidTransaction] = React.useState(false);
  // Clears input field after form is submitted or ATM mode Changed
  const [value, setValue] = React.useState("");
  //displays balance amount
  let status = `Balance: $${totalState.toFixed(2)} `;

  //handles change events
  const handleChange = (event) => {
    setValue(event.target.value);
    setDeposit(Number(event.target.value));
    if(event.target.value<=0){
      setValidTransaction(false);
    } else setValidTransaction(true);
  };

  //handles submit events
  const handleSubmit = (event) => {
    let newTotal = 0;
    if (atmMode==="Deposit" && Number(deposit) >=0){
      newTotal = totalState + deposit;
      alert(`$${deposit.toFixed(2)} Thank you for banking with us.`);
      setValidTransaction(false);
    } else {
      newTotal = totalState;
      alert(`Amount must be greater than $0.01.`);
    }

    setTotalState(newTotal);
    ctx.users[index].balance = newTotal;
    // Clears input field after form is submitted
    setValue("");
    event.preventDefault();
  };

  return (
      <Card 
        className="deposit-page p-3"
        hdrcolor="#508593"
        hdrtext="#F1E8E9"
        bodycolor="#544f63"
        bodytext="#F1E8E9"
        header="Deposits"
        title={status}
        text="Enter Deposit Amount"
        body={(
          <form 
            className="text-center"
            onSubmit={handleSubmit}>
            <ATM 
              onChange={handleChange} 
              atmMode={atmMode} 
              validTransaction={validTransaction} 
              value={value}/>
          </form>)}>
        </Card>
    );
};
export default Deposit;