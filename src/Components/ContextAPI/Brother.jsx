import { useContext } from "react";
import { MoneyContext } from "./Grandpa";


const Brother = () => {
  const [money,setMoney]= useContext(MoneyContext);
  const newMoney=6000;
 
  return (
    <div className="context">
      Brother:{money}
      <button onClick={()=>setMoney(newMoney)}>Add Money</button>
    </div>
  );
};

export default Brother;