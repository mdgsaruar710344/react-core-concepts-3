import Cousin from "./Cousin";


const Uncle = () => {
 
  return (
    <div className="context"> 
      Uncle:
      <div >
        <Cousin  name="Karim"></Cousin>
        <Cousin  name="Rahim"></Cousin>
      </div>
    </div>
  );
};

export default Uncle;