import React from 'react';
import UserContext from "../context.js";
import Card from "./card.js";

const AllData = () => {
    const ctx = React.useContext(UserContext);
    const users = ctx.users;
    let list = users.map((user, index) => {
    
        return (
          <tr key={index}>
              <td className="fs-6 text-wrap">{user.name}</td><td className="fs-6 text-wrap">{user.email}</td><td className="fs-6 text-wrap">{user.password}</td>
              </tr>
        );
      });
    
     
    return (
        <Card 
        className="alldata-page p-3"
        hdrcolor="#508593"
        hdrtext="#F1E8E9"
        bodycolor="#544f63"
        bodytext="#F1E8E9"
        header="All Data"
        body={(
      <table 
      className="table">
          <thead>
          <tr><th className="fs-6" scope="col">Name</th><th className="fs-6" scope="col">Email</th><th className="fs-6" scope="col">Password</th></tr>
          </thead>
          <tbody>{list}</tbody>
          
      </table>)}>
      </Card>
    );
  };
export default AllData;