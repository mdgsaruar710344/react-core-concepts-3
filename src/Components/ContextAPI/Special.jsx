import { useContext } from "react";
import { DataContext } from "./Grandpa";


const Special = () => {
 const receivedData= useContext(DataContext);
  return (
    <div className="context">
      Special has:{receivedData}
    </div>
  );
};

export default Special;