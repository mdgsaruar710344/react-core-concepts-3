
import { createContext, useState } from 'react';
import Aunty from './Aunty';
import './contextapi.css'
import Dad from './Dad';
import Uncle from './Uncle';

export const DataContext=createContext('gold');
export const MoneyContext=createContext(1000);


const Grandpa = () => {
const asset=500;
const [money, setMoney]=useState(1000);
  
  return (
    <div >
      GrandPa is here: {money}
     
    <MoneyContext.Provider value={[money,setMoney]}>
      <DataContext.Provider value={asset}>
          <div className="context">
              <Dad></Dad>
              <Uncle></Uncle>
              <Aunty></Aunty>
          </div>
      </DataContext.Provider>

    </MoneyContext.Provider>

   
 
   
    </div>
  );
};

export default Grandpa;